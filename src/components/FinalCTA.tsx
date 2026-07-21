import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { BOOK_URL } from '../constants';
import { fadeUp, viewportOnce } from '../lib/motion';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-28 text-white md:py-36">
      <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />

      <motion.div
        className="section-container relative flex flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <p className="eyebrow">let's begin</p>
        <h2 className="mt-5 max-w-2xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em]">
          Let's find one process worth automating.
        </h2>
        <p className="mt-5 max-w-lg text-lg text-white/70">
          A 20-minute call, a free audit, and a straight answer. No deck, no
          pressure.
        </p>
        <a href={BOOK_URL} className="btn-primary mt-10">
          Book a free automation audit
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  );
}
