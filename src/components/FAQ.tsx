import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeUp, viewportOnce } from '../lib/motion';
import { useLanguage } from '../i18n/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
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
          <p className="eyebrow">{t.faq.eyebrow}</p>
          <h2 className="mt-5 max-w-2xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
            {t.faq.title}
          </h2>
        </motion.div>

        <motion.div
          className="mt-12 divide-y divide-ink-200 border-y border-ink-200"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          {t.faq.items.map((faq, index) => {
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
                      <p className="pb-6 max-w-2xl text-ink-500">{faq.answer}</p>
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
