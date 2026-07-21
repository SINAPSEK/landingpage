import { motion } from 'framer-motion';
import { Building2, Users } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import { useLanguage } from '../i18n/LanguageContext';

const ICONS = [Building2, Users];

export default function Audiences() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="eyebrow">{t.audiences.eyebrow}</p>
          <h2 className="mt-5 max-w-2xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
            {t.audiences.title}
          </h2>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {t.audiences.items.map((audience, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div key={audience.tag} variants={fadeUp} className="card p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-tint text-green">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-6 font-mono text-xs uppercase tracking-wide text-green">
                  {audience.tag}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold text-ink-900">
                  {audience.title}
                </h3>
                <p className="mt-3 text-ink-500">{audience.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
