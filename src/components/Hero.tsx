import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import NeuralField from './NeuralField';
import { BOOK_URL } from '../constants';
import { fadeUp, staggerContainer } from '../lib/motion';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink-900 pb-28 pt-24 text-white md:pb-36 md:pt-32"
    >
      <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
      <NeuralField />

      <motion.div
        className="section-container relative flex flex-col items-start text-left"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={fadeUp} className="eyebrow">
          AI engineering studio · Quito → worldwide
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-6 max-w-3xl text-hero font-display font-extrabold leading-[1.05] tracking-[-0.03em]"
        >
          We connect your product to{' '}
          <span className="gradient-text">production-grade AI.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-lg text-white/70 md:text-xl"
        >
          SINAPSEK is a two-person AI engineering studio. We build the agents
          and document-AI your SaaS or agency needs — fixed scope, live in
          2–3 weeks, running on your stack.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a href={BOOK_URL} className="btn-primary">
            Book a free automation audit
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href="#what-we-build" className="btn-ghost-dark">
            See what we build
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
