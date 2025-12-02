// Simple translation system for Orange United
// Works with data-en and data-es attributes
// Persists across all pages

const STORAGE_KEY = 'orange-united-language';

export function getCurrentLanguage() {
  if (typeof window === 'undefined' || !window.localStorage) return 'en';
  try {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  } catch (e) {
    return 'en';
  }
}

export function setLanguage(lang) {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
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
  function runTranslations() {
    initTranslations();
  }
  
  // Run immediately if DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runTranslations);
  } else {
    // DOM already ready, run immediately
    runTranslations();
  }
  
  // Listen for language changes from toggle button
  window.addEventListener('languageChanged', (e) => {
    if (e.detail && e.detail.language) {
      applyTranslations(e.detail.language);
    }
  });
  
  // Also listen for storage changes (in case language is changed in another tab)
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      const newLang = e.newValue || 'en';
      applyTranslations(newLang);
    }
  });
}

