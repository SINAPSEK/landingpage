import { useEffect, useState } from 'react';
import { BOOK_URL } from '../constants';

const LINKS = [
  { label: 'What we build', href: '#what-we-build' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
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
          {LINKS.map((link) => (
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

        <a href={BOOK_URL} className="btn-primary text-sm">
          Book a call
        </a>
      </nav>
    </header>
  );
}
