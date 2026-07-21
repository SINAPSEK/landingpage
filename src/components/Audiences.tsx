import { Fade } from 'react-awesome-reveal';
import { Building2, Users } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const ICONS = [Building2, Users];

export default function Audiences() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="section-container">
        <Fade direction="up" triggerOnce duration={600}>
          <div>
            <p className="eyebrow">{t.audiences.eyebrow}</p>
            <h2 className="mt-5 max-w-2xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
              {t.audiences.title}
            </h2>
          </div>
        </Fade>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Fade direction="up" cascade damping={0.12} triggerOnce>
            {t.audiences.items.map((audience, i) => {
              const Icon = ICONS[i];
              const dark = i === 0;
              return (
                <div
                  key={audience.tag}
                  className={`h-full rounded-card p-8 transition-transform hover:-translate-y-1 ${
                    dark
                      ? 'bg-ink-900 text-white'
                      : 'card'
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${
                      dark ? 'bg-white/[.08] text-green-bright' : 'bg-green-tint text-green'
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p
                    className={`mt-6 font-mono text-xs uppercase tracking-wide ${
                      dark ? 'text-green-bright' : 'text-green'
                    }`}
                  >
                    {audience.tag}
                  </p>
                  <h3
                    className={`mt-3 font-display text-xl font-bold ${
                      dark ? 'text-white' : 'text-ink-900'
                    }`}
                  >
                    {audience.title}
                  </h3>
                  <p className={`mt-3 ${dark ? 'text-white/70' : 'text-ink-500'}`}>
                    {audience.description}
                  </p>
                </div>
              );
            })}
          </Fade>
        </div>
      </div>
    </section>
  );
}
