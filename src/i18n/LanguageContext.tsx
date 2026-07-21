import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { en, type Dictionary } from './en';
import { es } from './es';

export type Lang = 'en' | 'es';

const DICTIONARIES: Record<Lang, Dictionary> = { en, es };
const STORAGE_KEY = 'sinapsek-lang';

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'es') return stored;
  return window.navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
}

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = DICTIONARIES[lang].meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', DICTIONARIES[lang].meta.description);
  }, [lang]);

  const setLang = (next: Lang) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    setLangState(next);
  };

  const value = useMemo(() => ({ lang, setLang, t: DICTIONARIES[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
