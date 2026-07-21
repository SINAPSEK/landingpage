import { useEffect, useRef, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/LanguageContext';
import logo from '../assets/logo.png';

const LANG_OPTIONS: { value: Lang; flag: string; label: string }[] = [
  { value: 'es', flag: '🇪🇸', label: 'Español' },
  { value: 'en', flag: '🇺🇸', label: 'English' },
];

function LanguageSwitch({ dark, className = '' }: { dark: boolean; className?: string }) {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentOption = LANG_OPTIONS.find((opt) => opt.value === lang) || LANG_OPTIONS[0];

  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Seleccionar idioma / Select language"
        className={`flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-xs uppercase tracking-wide transition-all duration-300 outline-none ${
          dark
            ? 'border-white/10 bg-white/[.06] hover:bg-white/[.12] text-white hover:border-white/30'
            : 'border-ink-200 bg-white hover:bg-ink-50 text-ink-900 hover:border-ink-300'
        }`}
      >
        <span className="text-sm select-none leading-none">{currentOption.flag}</span>
        <span className="font-semibold">{currentOption.value}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 shrink-0 text-current opacity-70 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-36 rounded-card border shadow-xl backdrop-blur-md overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200 ${
            dark
              ? 'border-white/10 bg-ink-950/90 text-white'
              : 'border-ink-200 bg-white/95 text-ink-900'
          }`}
        >
          <div className="py-1" role="listbox">
            {LANG_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={lang === option.value}
                onClick={() => {
                  setLang(option.value);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-xs font-mono transition-colors ${
                  lang === option.value
                    ? 'bg-green text-white font-semibold'
                    : dark
                    ? 'hover:bg-white/[.08] text-white/80'
                    : 'hover:bg-ink-50 text-ink-750'
                }`}
              >
                <span className="text-sm select-none leading-none">{option.flag}</span>
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuContentRef = useRef<HTMLDivElement>(null);

  const [menuSpring, menuApi] = useSpring(() => ({ height: 0, opacity: 0 }));

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

  useEffect(() => {
    menuApi.start({
      height: menuOpen ? (menuContentRef.current?.scrollHeight ?? 0) : 0,
      opacity: menuOpen ? 1 : 0,
      config: { tension: 250, friction: 30 },
    });
  }, [menuOpen, menuApi]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? 'border-ink-200 bg-paper/80 backdrop-blur-md'
          : 'border-white/10 bg-transparent'
      }`}
    >
      <nav
        className="section-container flex h-20 items-center justify-between"
        aria-label="Primary"
      >
        <a
          href="#top"
          className={`group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight transition-colors ${
            solid ? 'text-ink-900' : 'text-white'
          }`}
        >
          <img 
            src={logo} 
            alt="SINAPSEK Logo" 
            className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" 
          />
          <span>SINAPSEK</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {t.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link font-sans text-sm font-medium transition-colors ${
                  solid ? 'text-ink-500 hover:text-ink-900' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitch dark={!solid} />
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden ${
            solid ? 'text-ink-900' : 'text-white hover:bg-white/10'
          }`}
        >
          {menuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      <animated.div
        id="mobile-menu"
        style={{ ...menuSpring, overflow: 'hidden' }}
        className={`border-t bg-paper transition-colors duration-300 md:hidden ${
          menuOpen ? 'border-ink-200' : 'border-transparent'
        }`}
      >
        <div ref={menuContentRef} className="section-container flex flex-col gap-6 py-6">
          <ul className="flex flex-col gap-4">
            {t.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-lg font-semibold text-ink-900 transition-colors hover:text-green"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between border-t border-ink-100 pt-4">
            <span className="text-xs font-mono text-ink-400 uppercase tracking-wider">Idioma / Language</span>
            <LanguageSwitch dark={false} />
          </div>
        </div>
      </animated.div>
    </header>
  );
}
