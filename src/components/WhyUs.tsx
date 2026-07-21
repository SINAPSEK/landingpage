import { motion } from 'framer-motion';
import { Globe, Mic2, Server, ShieldCheck, UserCheck, Workflow } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import { useLanguage } from '../i18n/LanguageContext';

const ICONS = {
  server: Server,
  workflow: Workflow,
  userCheck: UserCheck,
  mic: Mic2,
  globe: Globe,
  shield: ShieldCheck,
} as const;

export default function WhyUs() {
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
          <p className="eyebrow">{t.whyUs.eyebrow}</p>
          <h2 className="mt-5 max-w-2xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
            {t.whyUs.title}
          </h2>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-px overflow-hidden rounded-card border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {t.whyUs.reasons.map((reason) => {
            const Icon = ICONS[reason.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={reason.title}
                variants={fadeUp}
                className="bg-white p-8 transition-colors hover:bg-green-tint/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-tint text-green">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                  {reason.title}
                </h3>
                <p className="mt-3 text-ink-500">{reason.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
