import { useCallback, useEffect, useMemo, useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Language, translations } from './translations';

const valid = (value: string | null): value is Language => value === 'uk' || value === 'en' || value === 'ru';

function initialLanguage(): Language {
  const url = new URL(window.location.href);
  const query = url.searchParams.get('lang');
  if (valid(query)) return query;
  const stored = window.localStorage.getItem('wedding-language');
  return valid(stored) ? stored : weddingConfig.defaultLanguage;
}

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const [transitioning, setTransitioning] = useState(false);

  const setLanguage = useCallback((next: Language) => {
    if (next === language) return;
    setTransitioning(true);
    window.setTimeout(() => {
      setLanguageState(next);
      setTransitioning(false);
    }, 120);
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem('wedding-language', language);
    const url = new URL(window.location.href);
    if (language === 'uk') url.searchParams.delete('lang'); else url.searchParams.set('lang', language);
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
    const names = weddingConfig.couple[language];
    document.title = `${names.name1} & ${names.name2} — Wedding Wishlist`;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = translations[language].hero.lead;
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogTitle) ogTitle.content = document.title;
    if (ogDescription) ogDescription.content = translations[language].hero.lead;
  }, [language]);

  return useMemo(() => ({ language, setLanguage, t: translations[language], transitioning }), [language, setLanguage, transitioning]);
}
