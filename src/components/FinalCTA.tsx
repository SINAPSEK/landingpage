import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { BOOK_URL } from '../constants';
import { fadeUp, viewportOnce } from '../lib/motion';
import { useLanguage } from '../i18n/LanguageContext';

export default function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-ink-900 py-28 text-white md:py-36">
      <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />

      <motion.div
        className="section-container relative flex flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <p className="eyebrow">{t.finalCta.eyebrow}</p>
        <h2 className="mt-5 max-w-2xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em]">
          {t.finalCta.title}
        </h2>
        <p className="mt-5 max-w-lg text-lg text-white/70">{t.finalCta.subtitle}</p>
        <a href={BOOK_URL} className="btn-primary mt-10">
          {t.finalCta.cta}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  );
}
