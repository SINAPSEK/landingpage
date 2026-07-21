import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { BOOK_URL } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/LanguageContext';

function LanguageSwitch({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  const option = (value: Lang, label: string) => (
    <button
      type="button"
      onClick={() => setLang(value)}
      aria-pressed={lang === value}
      className={`rounded-full px-2.5 py-1 font-mono text-xs uppercase tracking-wide transition-colors ${
        lang === value ? 'bg-green text-white' : 'text-ink-500 hover:text-ink-900'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border border-ink-200 bg-white p-0.5 ${className}`}
    >
      {option('es', 'ES')}
      {option('en', 'EN')}
    </div>
  );
}

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [t]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || menuOpen
          ? 'border-ink-200 bg-paper/80 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav
        className="section-container flex h-20 items-center justify-between"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink-900"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-green" aria-hidden="true" />
          SINAPSEK
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {t.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-sm font-medium text-ink-500 transition-colors hover:text-ink-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitch />
          <a href={BOOK_URL} className="btn-primary text-sm">
            {t.nav.bookCall}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink-900 md:hidden"
        >
          {menuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-ink-200 bg-paper md:hidden"
          >
            <div className="section-container flex flex-col gap-6 py-6">
              <ul className="flex flex-col gap-4">
                {t.nav.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-display text-lg font-semibold text-ink-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between gap-4">
                <LanguageSwitch />
                <a href={BOOK_URL} className="btn-primary text-sm">
                  {t.nav.bookCall}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
