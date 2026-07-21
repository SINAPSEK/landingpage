import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { BOOK_URL } from '../constants';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import { useLanguage } from '../i18n/LanguageContext';

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="bg-paper py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="eyebrow">{t.pricing.eyebrow}</p>
          <h2 className="mt-5 max-w-2xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
            {t.pricing.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-500">{t.pricing.subtitle}</p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {t.pricing.plans.map((plan) => (
            <motion.div
              key={plan.title}
              variants={fadeUp}
              className={`relative flex flex-col rounded-card border p-8 ${
                plan.featured ? 'border-green bg-white shadow-lg' : 'card'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-green px-3 py-1 font-mono text-xs uppercase tracking-wide text-white">
                  {t.pricing.badge}
                </span>
              )}

              <h3 className="font-display text-2xl font-bold text-ink-900">{plan.title}</h3>
              <p className="mt-2">
                <span className="font-display text-3xl font-extrabold text-ink-900">
                  {plan.price}
                </span>{' '}
                <span className="text-sm text-ink-500">{plan.priceNote}</span>
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green" aria-hidden="true" />
                    <span className="text-ink-500">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={BOOK_URL}
                className={`mt-8 ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-10 text-center text-ink-500"
        >
          {t.pricing.footer}
        </motion.p>
      </div>
    </section>
  );
}
