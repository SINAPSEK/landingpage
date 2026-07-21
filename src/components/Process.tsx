import { Fade } from 'react-awesome-reveal';
import { Clock } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="bg-[#FAFBF9] py-24 md:py-32 border-t border-ink-150">
      <div className="section-container">
        <Fade direction="up" triggerOnce duration={600}>
          <div>
            <p className="eyebrow">{t.process.eyebrow}</p>
            <h2 className="mt-5 max-w-2xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
              {t.process.title}
            </h2>
          </div>
        </Fade>

        {/* Visual Timeline Pipeline */}
        <div className="relative mt-16">
          {/* Connecting Line in Background (Desktop only) */}
          <div 
            className="absolute top-[36px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-green/80 via-green-bright to-green/20 hidden md:block z-0" 
            aria-hidden="true" 
          />
          
          <ol className="grid gap-8 md:grid-cols-3 relative z-10">
            {t.process.steps.map((step) => (
              <Fade key={step.number} direction="up" triggerOnce delay={Number(step.number) * 100} duration={600}>
                <li
                  className="rounded-card bg-white border border-ink-200 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md flex flex-col gap-5 group z-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green bg-white text-green font-display text-base font-extrabold shadow-sm transition-colors duration-300 group-hover:bg-green group-hover:text-white">
                      {step.number}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-ink-400 font-semibold select-none">
                      {step.number === '1' && 'Auditoría Inicial'}
                      {step.number === '2' && 'Construcción Visible'}
                      {step.number === '3' && 'Código Entregado'}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink-900 group-hover:text-green transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Fade>
            ))}
          </ol>
        </div>

        <Fade direction="up" triggerOnce duration={600} delay={300}>
          <div className="mt-12 flex items-center justify-center gap-3 rounded-full border border-green/20 bg-green-tint/50 px-6 py-3 max-w-lg mx-auto shadow-sm">
            <Clock className="h-4 w-4 shrink-0 text-green" aria-hidden="true" />
            <p className="font-mono text-xs uppercase tracking-wide text-green-700 font-semibold">
              {t.process.footer}
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}
