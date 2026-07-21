import { Fade } from 'react-awesome-reveal';
import { ArrowUpRight, Mail } from 'lucide-react';
import { BOOK_URL, CONTACT_EMAIL } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';

export default function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="relative overflow-hidden bg-ink-900 py-28 text-white md:py-36 border-t border-white/[0.04]">
      <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
      <div className="grain pointer-events-none absolute inset-0" aria-hidden="true" />

      <Fade direction="up" triggerOnce duration={600}>
        <div className="section-container relative flex flex-col items-center text-center">
          <p className="eyebrow-dark">{t.finalCta.eyebrow}</p>
          <h2 className="mt-5 max-w-2xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em]">
            {t.finalCta.title}
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/70">{t.finalCta.subtitle}</p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href={BOOK_URL} className="btn-primary flex items-center gap-2">
              <span>{t.finalCta.cta}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            
            <a 
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[.06] hover:bg-white/[.12] hover:border-white/40 text-white px-6 py-3.5 text-sm font-semibold transition-all duration-300 active:scale-95"
            >
              <Mail className="h-4.5 w-4.5 text-green-bright" aria-hidden="true" />
              <span>{CONTACT_EMAIL}</span>
            </a>
          </div>
        </div>
      </Fade>
    </section>
  );
}
