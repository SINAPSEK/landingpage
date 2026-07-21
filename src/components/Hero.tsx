import { Fade } from 'react-awesome-reveal';
import NeuralField from './NeuralField';
import { useLanguage } from '../i18n/LanguageContext';
import logo from '../assets/logo.png';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-screen min-h-[100svh] flex-col justify-center overflow-hidden bg-mesh-hero pb-20 pt-24 text-white"
    >
      <NeuralField />
      <div className="grain pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Part: Title, Subtitle, and CTAs (Spans 7/12 columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Fade direction="up" cascade damping={0.12} triggerOnce duration={600}>
              <p className="eyebrow-dark">{t.hero.eyebrow}</p>

              <h1 className="mt-6 max-w-2xl text-hero font-display font-extrabold leading-[1.05] tracking-[-0.03em]">
                {t.hero.titleLead ? `${t.hero.titleLead} ` : ''}
                <span className="gradient-text">{t.hero.titleAccent}</span>
                {t.hero.titleTrail}
              </h1>

              <p className="mt-6 max-w-xl text-lg text-white/70 md:text-xl leading-relaxed">{t.hero.subtitle}</p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
                <a href="#what-we-build" className="btn-primary text-center">
                  {t.hero.ctaSecondary}
                </a>
              </div>

              <p className="glass mt-12 px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-ink-dim">
                {t.hero.credibility}
              </p>
            </Fade>
          </div>

          {/* Right Part: Massive glowing logo emblem (Spans 5/12 columns on desktop) */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <Fade direction="zoom-in" triggerOnce duration={800} delay={200}>
              <div className="relative select-none group">
                {/* Back glow effect behind the logo */}
                <div 
                  className="absolute inset-0 rounded-full bg-green-bright/20 filter blur-[100px] opacity-70 transition-all duration-700 group-hover:bg-green-bright/30 group-hover:scale-110" 
                  aria-hidden="true"
                />
                
                <img
                  src={logo}
                  alt="SINAPSEK Logo Emblem"
                  className="relative h-56 w-56 sm:h-72 sm:w-72 md:h-96 md:w-96 lg:h-[450px] lg:w-[450px] object-contain filter drop-shadow-[0_0_50px_rgba(92,240,138,0.35)] transition-all duration-500 hover:scale-105 animate-pulse"
                  style={{ animationDuration: '6s' }}
                />
              </div>
            </Fade>
          </div>

        </div>
      </div>
    </section>
  );
}
