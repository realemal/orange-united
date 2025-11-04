// Simple translation system for Orange United
// Works with data-en and data-es attributes

export function initTranslations() {
  const currentLang = localStorage.getItem('language') || 'en';
  applyTranslations(currentLang);
}

export function applyTranslations(lang) {
  // Translate all elements with data-en and data-es
  document.querySelectorAll('[data-en][data-es]').forEach(element => {
    if (lang === 'es' && element.dataset.es) {
      element.textContent = element.dataset.es;
    } else if (element.dataset.en) {
      element.textContent = element.dataset.en;
    }
  });
}

// Auto-initialize on import
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initTranslations);
  
  // Listen for language changes
  window.addEventListener('languageChanged', (e) => {
    applyTranslations(e.detail.language);
  });
}

