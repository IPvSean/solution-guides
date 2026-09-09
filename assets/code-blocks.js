(function () {
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

  function enhanceBlock(pre) {
    if (pre.closest('.cards-layout') || pre.closest('.key-terms-glossary')) return;
    if (!pre.closest('section')) return;

    var code = pre.querySelector('code');
    var text = code ? code.textContent : pre.textContent;
    var lang = code ? getLanguage(code) : '';

    var wrapper = pre.parentElement;
    if (!wrapper.classList.contains('code-block-wrapper')) {
      wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
    }

    if (!wrapper.querySelector('.code-block-lang')) {
      var langLabel = document.createElement('span');
      langLabel.className = 'code-block-lang';
      langLabel.textContent = getLanguageLabel(lang, text);
      wrapper.insertBefore(langLabel, pre);
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
