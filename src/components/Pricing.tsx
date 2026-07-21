import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { BOOK_URL } from '../constants';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const PLANS = [
  {
    title: 'Automation Sprint',
    price: 'from $1,900',
    priceNote: '(fixed scope)',
    features: [
      'One workflow automated end-to-end',
      'Working system in 2–3 weeks',
      'Weekly staging builds you can review',
      'You own the code and the deployment',
      '50% to start, 50% on delivery',
    ],
    cta: 'Start a Sprint',
    featured: true,
  },
  {
    title: 'Document AI',
    price: '$2,500 setup',
    priceNote: '+ monthly hosting',
    features: [
      'Assistant grounded in your own sources',
      'Production RAG, hosted and maintained',
      'Answers cite where they came from',
      'Your data stays yours, always',
      'Scales into a product you can resell',
    ],
    cta: 'Talk it through',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="eyebrow">pricing</p>
          <h2 className="mt-5 max-w-2xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
            Priced upfront, so you can say yes fast.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-500">
            Starting points, not final quotes — every engagement is scoped
            to what you actually need.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.title}
              variants={fadeUp}
              className={`flex flex-col rounded-card border p-8 ${
                plan.featured
                  ? 'border-green bg-white shadow-lg'
                  : 'card'
              }`}
            >
              <h3 className="font-display text-2xl font-bold text-ink-900">
                {plan.title}
              </h3>
              <p className="mt-2">
                <span className="font-display text-3xl font-extrabold text-ink-900">
                  {plan.price}
                </span>{' '}
                <span className="text-sm text-ink-500">{plan.priceNote}</span>
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-green"
                      aria-hidden="true"
                    />
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
          Not sure which you need? Start with a free automation audit — we'll
          find one process worth automating and tell you straight whether
          it's worth it.
        </motion.p>
      </div>
    </section>
  );
}
