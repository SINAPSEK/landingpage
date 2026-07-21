import { Fade } from 'react-awesome-reveal';
import { ShieldCheck, Workflow, Server, UserCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const ICONS = {
  server: Server,
  workflow: Workflow,
  shield: ShieldCheck,
  userCheck: UserCheck,
} as const;

export default function Nosotros() {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="bg-paper py-24 md:py-32 border-t border-ink-150">
      <div className="section-container">
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Purpose, Mission, Vision */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <Fade direction="left" triggerOnce duration={600}>
              <div>
                <p className="eyebrow">{t.nosotros.eyebrow}</p>
                <h2 className="mt-5 text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
                  {t.nosotros.title}
                </h2>
              </div>
            </Fade>

            <Fade direction="left" cascade damping={0.12} triggerOnce delay={100}>
              <div className="flex flex-col gap-8">
                {/* Purpose */}
                <div className="border-l-2 border-green pl-6 py-1">
                  <h3 className="font-display text-lg font-bold text-ink-900">
                    {t.nosotros.purpose.title}
                  </h3>
                  <p className="mt-2.5 text-base text-ink-650 leading-relaxed">
                    {t.nosotros.purpose.text}
                  </p>
                </div>

                {/* Mission */}
                <div className="border-l-2 border-green pl-6 py-1">
                  <h3 className="font-display text-lg font-bold text-ink-900">
                    {t.nosotros.mission.title}
                  </h3>
                  <p className="mt-2.5 text-base text-ink-650 leading-relaxed">
                    {t.nosotros.mission.text}
                  </p>
                </div>

                {/* Vision */}
                <div className="border-l-2 border-green pl-6 py-1">
                  <h3 className="font-display text-lg font-bold text-ink-900">
                    {t.nosotros.vision.title}
                  </h3>
                  <p className="mt-2.5 text-base text-ink-650 leading-relaxed">
                    {t.nosotros.vision.text}
                  </p>
                </div>
              </div>
            </Fade>
          </div>

          {/* Right Column: Principles Grid */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <Fade direction="right" triggerOnce duration={600} delay={150}>
              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-ink-900 border-b border-ink-150 pb-3">
                  {t.nosotros.principlesTitle}
                </h3>
              </div>
            </Fade>

            <div className="grid gap-6 sm:grid-cols-2">
              <Fade direction="right" cascade damping={0.1} triggerOnce delay={200}>
                {t.nosotros.principles.map((principle) => {
                  const Icon = ICONS[principle.icon as keyof typeof ICONS];
                  const dark = principle.icon === 'server'; // Highlight the production principle
                  return (
                    <div
                      key={principle.title}
                      className={`h-full rounded-card p-6 border transition-all duration-300 hover:-translate-y-1 ${
                        dark
                          ? 'bg-ink-900 border-white/5 text-white shadow-lg'
                          : 'bg-white border-ink-150 text-ink-900'
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          dark ? 'bg-white/[.08] text-green-bright' : 'bg-green-tint text-green'
                        }`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h4
                        className={`mt-4 font-display text-base font-bold ${
                          dark ? 'text-white' : 'text-ink-900'
                        }`}
                      >
                        {principle.title}
                      </h4>
                      <p className={`mt-2.5 text-sm leading-relaxed ${dark ? 'text-white/70' : 'text-ink-500'}`}>
                        {principle.description}
                      </p>
                    </div>
                  );
                })}
              </Fade>
            </div>
            
            <Fade direction="up" triggerOnce duration={600} delay={250}>
              <div className="rounded-card bg-ink-950 text-white p-6 border border-white/5 font-sans text-xs italic opacity-95 leading-relaxed">
                <span className="text-green-bright font-bold not-italic">Nota de coherencia:</span> la IA es el eje, no un pilar aislado. Modernizamos aplicaciones, ordenamos datos y operamos infraestructura de IA para que la inteligencia artificial funcione de punta a punta. Eso es lo que nos diferencia de la TI tradicional.
              </div>
            </Fade>
          </div>

        </div>
      </div>
    </section>
  );
}
