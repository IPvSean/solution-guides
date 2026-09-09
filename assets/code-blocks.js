(function () {
  var REFERENCE_PATTERN = /your_table_name|schema\.tablename|<computed_value>|YOUR_|estimated fires|÷/i;
  var OUTPUT_PATTERN = /^\s*\|[-+]+\|/m;

  function getLanguage(codeEl) {
    if (!codeEl || !codeEl.className) return '';
    var match = codeEl.className.match(/language-(\w+)/);
    return match ? match[1] : '';
  }

  function getLanguageLabel(lang, text) {
    if (lang === 'sql') return 'SQL';
    if (lang === 'yaml' || lang === 'yml') return 'YAML';
    if (lang === 'bash' || lang === 'shell') return 'Bash';
    if (lang === 'ini' || lang === 'conf') return 'CONF';
    if (/autovacuum_|^[a-z_]+ =/m.test(text)) return 'CONF';
    if (OUTPUT_PATTERN.test(text)) return 'Output';
    if (lang) return lang.toUpperCase();
    return 'Code';
  }

  function classifyBlock(text, lang) {
    if (REFERENCE_PATTERN.test(text)) return 'reference';
    if (OUTPUT_PATTERN.test(text) && !/^\s*SELECT/m.test(text)) return 'reference';
    if (/pg_reload_conf\s*\(\s*\)/i.test(text)) return 'runnable';
    if (/^\s*(SELECT|ALTER TABLE|CREATE |DROP |INSERT |UPDATE |DELETE )/im.test(text)) return 'runnable';
    if (/autovacuum_|^[a-z_]+ =/m.test(text) && lang !== 'sql') return 'runnable';
    if (lang === 'sql') return 'runnable';
    return 'reference';
  }

  function enhanceBlock(pre) {
    if (pre.closest('.cards-layout') || pre.closest('.key-terms-glossary')) return;
    if (!pre.closest('section')) return;

    var code = pre.querySelector('code');
    var text = code ? code.textContent : pre.textContent;
    var lang = code ? getLanguage(code) : '';
    var blockType = classifyBlock(text, lang);

    if (pre.classList.contains('code-runnable') || pre.classList.contains('code-reference')) {
      blockType = pre.classList.contains('code-reference') ? 'reference' : 'runnable';
    } else {
      pre.classList.add(blockType === 'reference' ? 'code-reference' : 'code-runnable');
    }

    var wrapper = pre.parentElement;
    if (!wrapper.classList.contains('code-block-wrapper')) {
      wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
    } else {
      wrapper.classList.add('code-block-wrapper');
    }

    wrapper.classList.remove('code-block-wrapper--runnable', 'code-block-wrapper--reference');
    wrapper.classList.add(blockType === 'reference' ? 'code-block-wrapper--reference' : 'code-block-wrapper--runnable');

    if (!wrapper.querySelector('.code-block-lang')) {
      var langLabel = document.createElement('span');
      langLabel.className = 'code-block-lang';
      langLabel.textContent = getLanguageLabel(lang, text);
      wrapper.insertBefore(langLabel, pre);
    }

    if (!wrapper.querySelector('.code-block-type')) {
      var typeLabel = document.createElement('span');
      typeLabel.className = 'code-block-type';
      typeLabel.textContent = blockType === 'reference' ? 'Adapt' : 'Run';
      wrapper.insertBefore(typeLabel, pre);
    }

    if (!wrapper.querySelector('.copy-btn')) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'copy-btn';
      btn.textContent = 'Copy';
      btn.setAttribute('aria-label', 'Copy code to clipboard');
      wrapper.appendChild(btn);

      btn.addEventListener('click', function () {
        var copyText = code ? code.textContent : pre.textContent;
        navigator.clipboard.writeText(copyText).then(function () {
          btn.textContent = 'Copied!';
          btn.classList.add('copy-btn--success');
          setTimeout(function () {
            btn.textContent = 'Copy';
            btn.classList.remove('copy-btn--success');
          }, 2000);
        });
      });
    }

    if (pre.offsetHeight > 120) {
      wrapper.classList.add('code-block-wrapper--tall');
    }
  }

  function init() {
    if (typeof Prism !== 'undefined' && Prism.highlightAll) {
      Prism.highlightAll();
    }

    document.querySelectorAll('section pre').forEach(enhanceBlock);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
