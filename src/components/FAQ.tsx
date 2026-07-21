import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeUp, viewportOnce } from '../lib/motion';

const FAQS = [
  {
    question: 'Do we own what you build?',
    answer:
      'Yes. Code, prompts, infrastructure config — all handed over and yours to keep. Hosting with us is optional, never a lock-in.',
  },
  {
    question: 'Can you work white-label, under our brand?',
    answer:
      "That's a core way we work with agencies. We stay invisible: your brand on the front, our engineering behind it, and you keep the client relationship.",
  },
  {
    question: 'How fast can we start?',
    answer:
      "The audit call happens within days. If we're a fit, you get a fixed proposal in 48 hours and a Sprint usually kicks off the following week.",
  },
  {
    question: 'Where are you based?',
    answer:
      'Quito, Ecuador, working remotely across US and EU time zones. Invoicing is clean in USD or EUR.',
  },
  {
    question: "What if it turns out AI isn't the answer?",
    answer:
      "Then we tell you. The audit is free and honest — if a workflow isn't worth automating, you'll hear that before you spend anything.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="eyebrow">faq</p>
          <h2 className="mt-5 max-w-2xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
            Frequently asked questions.
          </h2>
        </motion.div>

        <motion.div
          className="mt-12 divide-y divide-ink-200 border-y border-ink-200"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={faq.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left font-display text-lg font-semibold text-ink-900 transition-colors hover:text-green"
                  >
                    {faq.question}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-green transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 max-w-2xl text-ink-500">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
