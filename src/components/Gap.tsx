import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../lib/motion';
import { useLanguage } from '../i18n/LanguageContext';

export default function Gap() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24 md:py-32">
      <motion.div
        className="section-container"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <p className="eyebrow">{t.gap.eyebrow}</p>
        <h2 className="mt-5 max-w-3xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
          {t.gap.titleLead} <span className="text-green">{t.gap.titleAccent}</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-ink-500">{t.gap.body}</p>
      </motion.div>
    </section>
  );
}
