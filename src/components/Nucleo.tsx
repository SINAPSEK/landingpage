import { Fade } from 'react-awesome-reveal';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Nucleo() {
  const { t } = useLanguage();

  return (
    <section id="nucleo" className="bg-[#FAFBF9] py-24 md:py-32 relative overflow-hidden border-t border-ink-150">
      {/* Glow decorations */}
      <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.02]" aria-hidden="true" />
      
      <div className="section-container relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Fade direction="up" triggerOnce duration={600}>
            <div>
              <p className="eyebrow">{t.nucleo.eyebrow}</p>
              <h2 className="mt-5 text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
                {t.nucleo.title}
              </h2>
              <p className="mt-4 text-xl text-ink-600 font-medium">
                {t.nucleo.subtitle}
              </p>
              <p className="mt-6 text-base text-ink-500 max-w-2xl mx-auto leading-relaxed">
                {t.nucleo.concept}
              </p>
            </div>
          </Fade>
        </div>

        {/* Free AI Diagnostic callout box - High Contrast Neon Dark Callout */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Fade direction="up" triggerOnce duration={600} delay={100}>
            <div className="rounded-card bg-ink-900 border border-white/10 p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden shadow-2xl hover:border-green-bright/20 hover:shadow-glow transition-all duration-300 group">
              {/* Back glow decoration */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-green-bright/10 blur-3xl pointer-events-none" aria-hidden="true" />
              
              <div className="flex-1 z-10">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-bright/10 text-green-bright border border-green-bright/20 font-mono text-[10px] uppercase tracking-wider font-semibold">
                    <Sparkles className="h-3 w-3 animate-pulse" />
                    {t.nucleo.diagnosticTitle}
                  </span>
                </div>
                <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-2xl">
                  {t.nucleo.diagnosticDesc}
                </p>
              </div>
              <div className="shrink-0 z-10 w-full md:w-auto">
                <a
                  href="#contacto"
                  className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full bg-green-bright hover:bg-white text-ink-950 hover:text-green-700 px-6 py-3.5 text-sm font-semibold shadow-lg shadow-green-bright/10 transition-all duration-300 active:scale-95 group"
                >
                  <span>{t.nucleo.diagnosticCta}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Fade>
        </div>

        {/* Three Tiers Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <Fade direction="up" cascade damping={0.12} triggerOnce delay={150}>
            {t.nucleo.tiers.map((tier) => {
              const featured = tier.featured;
              return (
                <div
                  key={tier.id}
                  className={`flex flex-col justify-between rounded-card p-6 transition-all duration-300 hover:-translate-y-1.5 relative ${
                    featured
                      ? 'bg-ink-900 border-2 border-green text-white shadow-2xl z-10'
                      : 'bg-white border border-ink-200 text-ink-900 shadow-sm'
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green text-white font-mono text-[10px] uppercase tracking-wider font-semibold shadow-sm">
                      <Sparkles className="h-3 w-3" />
                      Recomendado
                    </span>
                  )}
                  
                  <div className="flex flex-col flex-grow">
                    {/* Fixed Height Title & Description Block (76px) */}
                    <div className="flex flex-col gap-1.5 h-[76px] justify-start">
                      <h3 className={`font-display text-2xl font-bold leading-tight ${featured ? 'text-white' : 'text-ink-900'}`}>
                        {tier.name}
                      </h3>
                      <p className={`text-xs leading-relaxed ${featured ? 'text-white/70' : 'text-ink-500'}`}>
                        {tier.subtitle}
                      </p>
                    </div>

                    {/* Fixed Height (96px) Visual Previews */}
                    <div className="h-[96px] mt-4 flex flex-col justify-center">
                      {tier.id === 'emprende' && (
                        <div className="rounded-lg bg-[#0B141A] p-3 text-[9.5px] font-sans border border-[#202C33] shadow-inner select-none w-full">
                          <div className="flex items-center gap-1.5 border-b border-[#202C33] pb-1.5 mb-1.5">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-bright" />
                            <span className="text-[#E9EDEF] font-semibold text-[8px] tracking-wider uppercase font-mono">WhatsApp Chat</span>
                          </div>
                          <div className="space-y-1.5">
                            <div className="flex flex-col items-start">
                              <div className="bg-[#202C33] text-[#E9EDEF] rounded px-2 py-1 max-w-[90%] rounded-tl-none leading-snug">
                                ¿Tienen stock?
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className="bg-[#005C4B] text-[#E9EDEF] rounded px-2 py-1 max-w-[90%] rounded-tr-none leading-snug">
                                ¡Sí, quedan 3! ¿Agendamos? 🚀
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {tier.id === 'crece' && (
                        <div className="rounded-lg bg-ink-950/80 p-3 text-[9px] font-mono border border-white/10 shadow-inner select-none text-white/75 space-y-1.5 w-full">
                          <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-1">
                            <span className="text-green-bright font-semibold text-[8px] tracking-wider">PROCESS_AUTOMATOR</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>📄 Facturas:</span>
                            <span className="text-green-bright">DONE (99.8%)</span>
                          </div>
                          <div className="flex items-center justify-between text-[8px] text-white/40">
                            <span>⚡ RAG: 12 docs</span>
                            <span>⏱ Latencia: 42ms</span>
                          </div>
                        </div>
                      )}

                      {tier.id === 'corporativo' && (
                        <div className="rounded-lg bg-paper border border-ink-200 p-3 text-[9px] font-mono shadow-inner select-none text-ink-700 space-y-1.5 w-full">
                          <div className="flex items-center justify-between border-b border-ink-200 pb-1 mb-1">
                            <span className="text-green font-semibold text-[8px] tracking-wider">AGENT_MESH</span>
                          </div>
                          <div className="flex items-center justify-center gap-1.5 py-0.5">
                            <div className="bg-green text-white px-1.5 py-0.5 rounded font-bold text-[7px]">
                              Supervisor
                            </div>
                            <span className="text-ink-400">➜</span>
                            <div className="bg-ink-900 text-white px-1.5 py-0.5 rounded text-[7.5px]">
                              RAG / Sync Nodes
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Aligned Features List with min-height (190px) */}
                    <div className={`my-4 border-t ${featured ? 'border-white/10' : 'border-ink-100'} pt-4 min-h-[190px] flex flex-col justify-start`}>
                      <ul className="flex flex-col gap-2.5">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? 'text-green-bright' : 'text-green'}`} aria-hidden="true" />
                            <span className={`text-xs ${featured ? 'text-white/85' : 'text-ink-700'} leading-normal`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Price & Call-To-Action (Anchored at the bottom) */}
                  <div className={`pt-4 border-t ${featured ? 'border-white/10' : 'border-ink-100'}`}>
                    <p className={`text-[10px] font-mono uppercase tracking-wider ${featured ? 'text-green-bright' : 'text-green'}`}>
                      Esquema de modelo
                    </p>
                    <p className={`mt-1 text-sm font-bold ${featured ? 'text-white' : 'text-ink-900'}`}>
                      {tier.price}
                    </p>
                    <a
                      href="#contacto"
                      className={`mt-4 flex w-full items-center justify-center rounded-full py-3 text-[13px] font-semibold transition-all active:scale-95 ${
                        featured
                          ? 'bg-green hover:bg-green-600 text-white shadow-md'
                          : 'bg-white hover:bg-ink-50 border border-ink-300 text-ink-900'
                      }`}
                    >
                      Comenzar
                    </a>
                  </div>
                </div>
              );
            })}
          </Fade>
        </div>
      </div>
    </section>
  );
}
