import { Fade } from 'react-awesome-reveal';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="what-we-build" className="bg-ink-950 text-white py-24 md:py-32 border-y border-white/[0.04] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-green-forest/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="grain pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="section-container relative z-10">
        {/* Header */}
        <Fade direction="up" triggerOnce duration={600}>
          <div>
            <p className="eyebrow-dark">{t.services.eyebrow}</p>
            <h2 className="mt-5 max-w-2xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-white">
              {t.services.title}
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-white/70">{t.services.subtitle}</p>
          </div>
        </Fade>

        {/* Minimalist Horizontal Rows */}
        <div className="mt-20 flex flex-col">
          
          {/* Row 1: Application Services */}
          <Fade direction="up" triggerOnce delay={50} duration={600}>
            <div className="group border-t border-white/10 py-10 transition-all duration-300 hover:bg-white/[0.01] hover:pl-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-1 font-mono text-xs text-green-bright tracking-wider pt-1 select-none">
                  [ 01 ]
                </div>
                <div className="lg:col-span-5">
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-green-bright transition-colors duration-300">
                    {t.services.categories[0].title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70 max-w-md leading-relaxed">
                    {t.services.categories[0].subtitle}
                  </p>
                </div>
                <div className="lg:col-span-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {t.services.categories[0].items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-bright" aria-hidden="true" />
                        <span className="text-white/80 text-sm leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Fade>

          {/* Row 2: Data and Analytics */}
          <Fade direction="up" triggerOnce delay={100} duration={600}>
            <div className="group border-t border-white/10 py-10 transition-all duration-300 hover:bg-white/[0.01] hover:pl-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-1 font-mono text-xs text-green-bright tracking-wider pt-1 select-none">
                  [ 02 ]
                </div>
                <div className="lg:col-span-5">
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-green-bright transition-colors duration-300">
                    {t.services.categories[1].title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70 max-w-md leading-relaxed">
                    {t.services.categories[1].subtitle}
                  </p>
                </div>
                <div className="lg:col-span-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {t.services.categories[1].items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-bright" aria-hidden="true" />
                        <span className="text-white/80 text-sm leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Fade>

          {/* Row 3: AI Infrastructure Services */}
          <Fade direction="up" triggerOnce delay={150} duration={600}>
            <div className="group border-y border-white/10 py-10 transition-all duration-300 hover:bg-white/[0.01] hover:pl-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-1 font-mono text-xs text-green-bright tracking-wider pt-1 select-none">
                  [ 03 ]
                </div>
                <div className="lg:col-span-5">
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-green-bright transition-colors duration-300">
                    {t.services.categories[2].title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70 max-w-md leading-relaxed">
                    {t.services.categories[2].subtitle}
                  </p>
                </div>
                <div className="lg:col-span-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {t.services.categories[2].items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-bright" aria-hidden="true" />
                        <span className="text-white/80 text-sm leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Fade>

          {/* Diagnostic Callout Banner */}
          <Fade direction="up" triggerOnce delay={200} duration={600}>
            <div className="mt-16 rounded-card bg-gradient-to-br from-green-surface to-green-forest border border-green-bright/20 p-8 text-white shadow-glow shadow-green-bright/5 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-green-bright/[0.05] blur-2xl transition-all group-hover:scale-150 duration-500" />
              
              <div className="flex flex-col gap-6 md:flex-row md:items-center justify-between z-10 relative">
                <div className="flex flex-col gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[.12] text-green-bright">
                    <Sparkles className="h-5 w-5 animate-pulse" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {t.services.diagnosticCard.title}
                    </h3>
                    <p className="mt-2 text-white/90 text-sm max-w-xl leading-relaxed">
                      {t.services.diagnosticCard.description}
                    </p>
                  </div>
                </div>
                
                <div className="shrink-0 mt-2 md:mt-0">
                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-green-bright hover:bg-white text-ink-950 hover:text-green-700 px-6 py-3.5 text-sm font-semibold shadow-sm transition-all duration-300 active:scale-95 group"
                  >
                    <span>{t.services.diagnosticCard.cta}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </Fade>

        </div>
      </div>
    </section>
  );
}
