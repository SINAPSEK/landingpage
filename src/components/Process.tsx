import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import { useLanguage } from '../i18n/LanguageContext';

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="bg-paper py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="eyebrow">{t.process.eyebrow}</p>
          <h2 className="mt-5 max-w-2xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
            {t.process.title}
          </h2>
        </motion.div>

        <motion.ol
          className="mt-14 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {t.process.steps.map((step) => (
            <motion.li key={step.number} variants={fadeUp} className="card p-8">
              <span className="font-display text-4xl font-extrabold text-green">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-ink-900">
                {step.title}
              </h3>
              <p className="mt-3 text-ink-500">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-12 text-center font-mono text-xs uppercase tracking-[0.18em] text-ink-500"
        >
          {t.process.footer}
        </motion.p>
      </div>
    </section>
  );
}
