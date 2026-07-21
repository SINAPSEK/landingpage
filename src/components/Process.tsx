import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const STEPS = [
  {
    number: '1',
    title: 'Scope',
    description:
      'A short call to find the one process worth automating. You get a fixed-scope, fixed-price proposal within 48 hours — no vague estimates.',
  },
  {
    number: '2',
    title: 'Build',
    description:
      'We build in the open. A working slice each week, deployed to a staging environment you can click through and react to.',
  },
  {
    number: '3',
    title: 'Ship',
    description:
      'Deployed to your stack, documented, and handed over. The code is yours. We stay on for hosting and iteration only if you want us to.',
  },
];

export default function Process() {
  return (
    <section id="how-it-works" className="bg-paper py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="eyebrow">how a sprint works</p>
          <h2 className="mt-5 max-w-2xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
            From first call to shipped, in three moves.
          </h2>
        </motion.div>

        <motion.ol
          className="mt-14 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {STEPS.map((step) => (
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
          typical timeline 2–3 weeks · milestone-based · 50% to start
        </motion.p>
      </div>
    </section>
  );
}
