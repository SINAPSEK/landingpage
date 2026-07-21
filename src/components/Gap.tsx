import { Fade } from 'react-awesome-reveal';
import { useLanguage } from '../i18n/LanguageContext';

export default function Gap() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24 md:py-32 border-b border-ink-200">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes laser-flow {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .laser-particle {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 10px;
          height: 10px;
          background-color: #2FE0A6;
          border-radius: 50%;
          box-shadow: 0 0 15px #3DE08A, 0 0 5px #2FE0A6;
          animation: laser-flow 4s linear infinite;
        }
        .blinking-dot-yellow {
          animation: pulse-yellow 1.5s infinite;
        }
        .blinking-dot-green {
          animation: pulse-green 1.5s infinite;
        }
        @keyframes pulse-yellow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; filter: drop-shadow(0 0 4px #F59E0B); }
        }
        @keyframes pulse-green {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; filter: drop-shadow(0 0 4px #2FE0A6); }
        }
      `}} />

      <div className="section-container">
        <Fade direction="up" triggerOnce duration={600}>
          <div>
            <p className="eyebrow">{t.gap.eyebrow}</p>
            <h2 className="mt-5 max-w-3xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
              {t.gap.titleLead} <span className="text-green">{t.gap.titleAccent}</span>
            </h2>
          </div>
        </Fade>

        {/* Dynamic Graphic Visualization of the "Gap" */}
        <Fade direction="up" triggerOnce delay={100} duration={600}>
          <div className="mt-14 rounded-card bg-ink-950 border border-ink-900 p-8 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="grain pointer-events-none absolute inset-0 opacity-[0.03]" aria-hidden="true" />

            {/* Left Console: Demo / Sandbox */}
            <div className="w-full md:w-[280px] bg-ink-900/60 border border-white/5 rounded-lg p-5 font-mono text-[10px] leading-relaxed relative flex flex-col justify-between h-44 shadow-inner">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                  <span className="h-2 w-2 rounded-full bg-green-500/70" />
                </div>
                <span className="flex items-center gap-1.5 font-semibold text-yellow-500 select-none">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 blinking-dot-yellow" />
                  SANDBOX_DEMO
                </span>
              </div>
              <div className="flex-1 text-white/50 space-y-1">
                <p className="text-white/80">$ npm run dev:mock</p>
                <p>&gt; Starting mock demo environment...</p>
                <p className="text-yellow-500/80">[!] Using simulated static dataset</p>
                <p className="text-yellow-500/80">[!] API latency: 1250ms (mocked)</p>
                <p className="text-white/80">[✔] Local server running on port 5173</p>
              </div>
            </div>

            {/* Middle Laser Bridge */}
            <div className="relative flex-1 w-full md:w-auto flex flex-col items-center justify-center py-4 md:py-0">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-green-bright mb-3 select-none">
                Sinapsek Bridge
              </span>
              <div className="w-full h-[2px] bg-white/10 rounded-full relative">
                <div className="laser-particle" />
              </div>
              <span className="font-mono text-[8px] uppercase tracking-wider text-white/30 mt-3 select-none">
                applied engineering pipeline
              </span>
            </div>

            {/* Right Console: Production / Cloud AWS */}
            <div className="w-full md:w-[280px] bg-ink-900/60 border border-white/5 rounded-lg p-5 font-mono text-[10px] leading-relaxed relative flex flex-col justify-between h-44 shadow-inner">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                  <span className="h-2 w-2 rounded-full bg-green-500/70" />
                </div>
                <span className="flex items-center gap-1.5 font-semibold text-green-bright select-none">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-bright blinking-dot-green" />
                  AWS_PRODUCTION
                </span>
              </div>
              <div className="flex-1 text-white/50 space-y-1">
                <p className="text-white/80">$ terraform apply --auto-approve</p>
                <p>&gt; Initializing LangGraph state nodes...</p>
                <p className="text-green-bright/80">[✔] MLOps serverless pipelines active</p>
                <p className="text-green-bright/80">[✔] Vector index RAG queried in 34ms</p>
                <p className="text-white/80">[✔] API live status: 200 OK (0 errors)</p>
              </div>
            </div>
          </div>
        </Fade>

        {/* Large Typographic Highlight */}
        <Fade direction="up" triggerOnce delay={200} duration={600}>
          <div className="mt-12 border-l-4 border-green pl-6 py-2">
            <p className="text-2xl md:text-3xl font-display font-extrabold leading-normal tracking-tight text-ink-900">
              “Esa distancia <span className="text-green">— entre la demo y algo corriendo en producción —</span> es donde trabajamos.”
            </p>
          </div>
        </Fade>

      </div>
    </section>
  );
}
