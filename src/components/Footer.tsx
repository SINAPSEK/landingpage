import { ExternalLink, Mail } from 'lucide-react';
import { CONTACT_EMAIL, GITHUB_URL } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';
import logo from '../assets/logo.png';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-ink-900 py-12 text-white/70">
      <div className="section-container flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="flex items-center gap-2.5 font-display text-lg font-bold text-white">
          <img 
            src={logo} 
            alt="SINAPSEK Logo" 
            className="h-8 w-8 object-contain" 
          />
          <span>SINAPSEK</span>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-2 text-sm transition-colors hover:text-green-bright"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {CONTACT_EMAIL}
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm transition-colors hover:text-green-bright"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            {t.footer.github}
          </a>
        </div>

        <p className="font-mono text-xs uppercase tracking-wide text-white/40">
          {t.footer.tagline}
        </p>
      </div>
    </footer>
  );
}
