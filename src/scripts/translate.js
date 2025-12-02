// Simple translation system for Orange United
// Works with data-en and data-es attributes
// Persists across all pages and browser tabs

const STORAGE_KEY = 'orange-united-language';

export function getCurrentLanguage() {
  if (typeof window === 'undefined' || !window.localStorage) return 'en';
  try {
    const lang = localStorage.getItem(STORAGE_KEY);
    return lang || 'en';
  } catch (e) {
    return 'en';
  }
}

export function setLanguage(lang) {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
    // Trigger storage event for cross-tab sync
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new StorageEvent('storage', {
        key: STORAGE_KEY,
        newValue: lang,
        oldValue: getCurrentLanguage()
      }));
    }
  } catch (e) {
    console.warn('Could not save language preference');
  }
}

export function applyTranslations(lang) {
  if (typeof document === 'undefined') return;
  
  // Update HTML lang attribute
  if (document.documentElement) {
    document.documentElement.setAttribute('lang', lang);
  }
  
  // Translate all elements with data-en and data-es
  document.querySelectorAll('[data-en][data-es]').forEach(element => {
    if (element instanceof HTMLElement) {
      if (lang === 'es' && element.dataset.es) {
        element.textContent = element.dataset.es;
      } else if (element.dataset.en) {
        element.textContent = element.dataset.en;
      }
    }
  });
  
  // Update language toggle button display
  const langSpan = document.getElementById('current-lang');
  if (langSpan) {
    langSpan.textContent = lang.toUpperCase();
  }
}

export function initTranslations() {
  const currentLang = getCurrentLanguage();
  applyTranslations(currentLang);
}

// Auto-initialize on every page load
if (typeof window !== 'undefined') {
  // Run immediately - don't wait
  initTranslations();
  
  // Also run on DOMContentLoaded as backup
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTranslations);
  }
  
  // Listen for language changes from toggle button
  window.addEventListener('languageChanged', (e) => {
    if (e.detail && e.detail.language) {
      applyTranslations(e.detail.language);
    }
  });
  
  // Listen for storage changes (cross-tab synchronization)
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY && e.newValue) {
      applyTranslations(e.newValue);
    }
  });
  
  // Reapply on page visibility change (when switching tabs back)
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      initTranslations();
    }
  });
}

