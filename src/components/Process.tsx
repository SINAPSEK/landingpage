import { Fade } from 'react-awesome-reveal';
import { Clock } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="bg-paper py-24 md:py-32">
      <div className="section-container">
        <Fade direction="up" triggerOnce duration={600}>
          <div>
            <p className="eyebrow">{t.process.eyebrow}</p>
            <h2 className="mt-5 max-w-2xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
              {t.process.title}
            </h2>
          </div>
        </Fade>

        <Fade direction="up" cascade damping={0.12} triggerOnce>
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {t.process.steps.map((step) => (
              <li
                key={step.number}
                className="card h-full p-8 transition-transform hover:-translate-y-1"
              >
                <span className="font-display text-4xl font-extrabold text-green">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-ink-500">{step.description}</p>
              </li>
            ))}
          </ol>
        </Fade>

        <Fade direction="up" triggerOnce duration={600}>
          <div className="mt-8 flex items-center justify-center gap-3 rounded-full border border-green/20 bg-green-tint px-6 py-3">
            <Clock className="h-4 w-4 shrink-0 text-green" aria-hidden="true" />
            <p className="font-mono text-xs uppercase tracking-wide text-green-700">
              {t.process.footer}
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}
