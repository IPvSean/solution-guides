(function () {
  var STORAGE_KEY = 'ansible-guides-theme';

  function getSystemDark() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function getStoredTheme() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function getEffectiveTheme() {
    var stored = getStoredTheme();
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return getSystemDark() ? 'dark' : 'light';
  }

  function updateToggle(theme) {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    var icon = btn.querySelector('i');
    if (theme === 'dark') {
      icon.className = 'fas fa-sun';
      btn.setAttribute('aria-label', 'Switch to light mode');
      btn.setAttribute('title', 'Switch to light mode');
    } else {
      icon.className = 'fas fa-moon';
      btn.setAttribute('aria-label', 'Switch to dark mode');
      btn.setAttribute('title', 'Switch to dark mode');
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateToggle(theme);
    document.dispatchEvent(new CustomEvent('ansible-guides-theme-change', {
      detail: { theme: theme }
    }));
  }

  function setTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
    applyTheme(theme);
  }

  window.AnsibleGuidesTheme = {
    getEffectiveTheme: getEffectiveTheme,
    applyTheme: applyTheme,
    setTheme: setTheme
  };

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(getEffectiveTheme());

    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        setTheme(getEffectiveTheme() === 'dark' ? 'light' : 'dark');
      });
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
      if (!getStoredTheme()) {
        applyTheme(getEffectiveTheme());
      }
    });
  });
})();
