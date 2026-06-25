import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return localStorage.getItem('utility_lang') || 'en';
  });

  const isRTL = lang === 'ar';

  // Apply lang and dir to <html> element
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    localStorage.setItem('utility_lang', lang);
  }, [lang, isRTL]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  const t = useCallback(
    (key) => {
      const value = translations[lang]?.[key];
      if (value === undefined) {
        // fallback to English if missing
        return translations.en[key] ?? key;
      }
      return value;
    },
    [lang]
  );

  const value = { lang, isRTL, toggleLang, t };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
