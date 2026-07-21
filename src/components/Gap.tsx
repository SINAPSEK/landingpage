import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../lib/motion';

export default function Gap() {
  return (
    <section className="bg-white py-24 md:py-32">
      <motion.div
        className="section-container"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <p className="eyebrow">the gap</p>
        <h2 className="mt-5 max-w-3xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
          Everyone wants AI in their product.{' '}
          <span className="text-green">
            Almost no one has shipped it.
          </span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-ink-500">
          SaaS teams promise AI features that sit in the backlog. Agencies
          pitch AI they don't have the engineers to build. That distance —
          between the demo and something running in production — is where we
          work.
        </p>
      </motion.div>
    </section>
  );
}
