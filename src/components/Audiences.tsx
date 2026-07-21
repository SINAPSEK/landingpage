import { motion } from 'framer-motion';
import { Building2, Users } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const AUDIENCES = [
  {
    icon: Building2,
    tag: 'SaaS teams',
    title: 'Ship the AI feature without hiring an AI team.',
    description:
      "You have the product and the users. We add the copilot, the semantic search, the document-AI — as a clean API your team can own — without a six-month hire.",
  },
  {
    icon: Users,
    tag: "Agencies · white-label",
    title: 'Deliver AI to your clients, under your name.',
    description:
      "Sell the AI work you can't staff internally. We build it invisibly behind you: your brand on the front, senior AI engineers on the back. You keep the client relationship.",
  },
];

export default function Audiences() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="eyebrow">who it's for</p>
          <h2 className="mt-5 max-w-2xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
            Built for the teams on the hook to deliver AI.
          </h2>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {AUDIENCES.map((audience) => (
            <motion.div
              key={audience.tag}
              variants={fadeUp}
              className="card p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-tint text-green">
                <audience.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-6 font-mono text-xs uppercase tracking-wide text-green">
                {audience.tag}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-ink-900">
                {audience.title}
              </h3>
              <p className="mt-3 text-ink-500">{audience.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
