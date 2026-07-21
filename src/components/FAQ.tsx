import { useEffect, useRef, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { Fade } from 'react-awesome-reveal';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import type { Dictionary } from '../i18n/en';

type Faq = Dictionary['faq']['items'][number];

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: Faq;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLParagraphElement>(null);
  const buttonId = `faq-button-${faq.question}`;
  const panelId = `faq-panel-${faq.question}`;

  const [springs, api] = useSpring(() => ({ height: 0, opacity: 0 }));

  useEffect(() => {
    api.start({
      height: isOpen ? (contentRef.current?.scrollHeight ?? 0) : 0,
      opacity: isOpen ? 1 : 0,
      config: { tension: 250, friction: 30 },
    });
  }, [isOpen, api]);

  return (
    <div>
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
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
      <animated.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        style={{ ...springs, overflow: 'hidden' }}
      >
        <p ref={contentRef} className="max-w-2xl pb-6 text-ink-500">
          {faq.answer}
        </p>
      </animated.div>
    </div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="section-container">
        <Fade direction="up" triggerOnce duration={600}>
          <div>
            <p className="eyebrow">{t.faq.eyebrow}</p>
            <h2 className="mt-5 max-w-2xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
              {t.faq.title}
            </h2>
          </div>
        </Fade>

        <Fade direction="up" triggerOnce duration={600}>
          <div className="mt-12 divide-y divide-ink-200 border-y border-ink-200">
            {t.faq.items.map((faq, index) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}
