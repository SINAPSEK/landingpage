import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const REASONS = [
  {
    tag: 'A1',
    title: 'Production, not prototypes',
    description:
      'Serverless on AWS — Lambda, Step Functions, Terraform — the same stack we run in production today. Built to stay up, not to demo once.',
  },
  {
    tag: 'A2',
    title: 'Agents with the newest tooling',
    description:
      "LangGraph, RAG, MCP and Agent Skills. Most shops haven't caught up to agentic tooling yet — it's our default.",
  },
  {
    tag: 'A3',
    title: 'Founder-led',
    description:
      'You work directly with the engineers who write the code. No account managers, no handoffs.',
  },
  {
    tag: 'A4',
    title: 'On the record',
    description:
      'Speakers at AWS Community Day Ecuador 2026 and GDG Quito. We build in public and stand behind the work.',
  },
  {
    tag: 'A5',
    title: 'Built to export',
    description:
      'Remote across US and EU time zones. We invoice cleanly in USD or EUR, with no cross-border friction for you.',
  },
  {
    tag: 'A6',
    title: 'Fixed scope, real risk-sharing',
    description:
      'You approve the scope and the price before we start. The audit that gets you there costs nothing.',
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="eyebrow">why sinapsek</p>
          <h2 className="mt-5 max-w-2xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
            Senior engineering, not a prototype in a notebook.
          </h2>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-px overflow-hidden rounded-card border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {REASONS.map((reason) => (
            <motion.div
              key={reason.tag}
              variants={fadeUp}
              className="bg-white p-8 transition-colors hover:bg-green-tint/40"
            >
              <span className="font-mono text-sm font-semibold text-green">
                {reason.tag}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-ink-900">
                {reason.title}
              </h3>
              <p className="mt-3 text-ink-500">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
