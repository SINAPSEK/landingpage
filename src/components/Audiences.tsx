import { Fade } from 'react-awesome-reveal';
import { Building2, Users, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Audiences() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24 md:py-32 border-t border-ink-150">
      <div className="section-container">
        {/* Header */}
        <Fade direction="up" triggerOnce duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow">{t.audiences.eyebrow}</p>
            <h2 className="mt-5 text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
              {t.audiences.title}
            </h2>
          </div>
        </Fade>

        {/* Two Matching High-Fidelity Cards */}
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Card 1: SaaS Teams */}
          <Fade direction="up" triggerOnce delay={50} duration={600}>
            <div className="h-full rounded-card bg-ink-900 text-white border border-white/5 p-8 shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-green-bright/5 blur-2xl group-hover:bg-green-bright/10 transition-colors duration-500" aria-hidden="true" />
              
              <div>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.06] text-green-bright group-hover:scale-105 transition-transform duration-300">
                    <Building2 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-green-bright">
                      {t.audiences.items[0].tag}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white mt-0.5">
                      {t.audiences.items[0].title}
                    </h3>
                  </div>
                </div>

                <p className="mt-6 text-sm text-white/70 leading-relaxed">
                  {t.audiences.items[0].description}
                </p>
                
                {/* Specific bullets list */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-bright" aria-hidden="true" />
                      <span className="text-white/80 text-xs leading-normal">Búsqueda semántica, copilotos y Document-AI</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-bright" aria-hidden="true" />
                      <span className="text-white/80 text-xs leading-normal">Lanza funciones de IA rápido, sin contratar ingenieros permanentes</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-bright" aria-hidden="true" />
                      <span className="text-white/80 text-xs leading-normal">Entrega mediante APIs limpias y documentadas que tu equipo dominará</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Fade>

          {/* Card 2: White-Label Agencies */}
          <Fade direction="up" triggerOnce delay={150} duration={600}>
            <div className="h-full rounded-card bg-ink-900 text-white border border-white/5 p-8 shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-green-bright/5 blur-2xl group-hover:bg-green-bright/10 transition-colors duration-500" aria-hidden="true" />

              <div>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.06] text-green-mint group-hover:scale-105 transition-transform duration-300">
                    <Users className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-green-mint">
                      {t.audiences.items[1].tag}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white mt-0.5">
                      {t.audiences.items[1].title}
                    </h3>
                  </div>
                </div>

                <p className="mt-6 text-sm text-white/70 leading-relaxed">
                  {t.audiences.items[1].description}
                </p>

                {/* Specific bullets list */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-bright" aria-hidden="true" />
                      <span className="text-white/80 text-xs leading-normal">Vende capacidades avanzadas de IA bajo tu propia marca comercial</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-bright" aria-hidden="true" />
                      <span className="text-white/80 text-xs leading-normal">Ingenieros senior de IA construyendo de forma invisible para ti</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-bright" aria-hidden="true" />
                      <span className="text-white/80 text-xs leading-normal">Mantén la relación del cliente al 100% mientras nosotros operamos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
