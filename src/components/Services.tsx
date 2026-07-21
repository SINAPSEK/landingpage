import { motion } from 'framer-motion';
import { Bot, FileSearch } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const SERVICES = [
  {
    index: '01',
    icon: Bot,
    title: 'Automation Sprint',
    role: 'one manual process → one agent',
    description:
      'Pick a repetitive workflow — quotes, email triage, reporting, pulling data out of documents. We design, build and deploy an agent that does it. You see progress every week, and you own the code at the end.',
    chips: ['2–3 weeks', 'from $1,900', '50% upfront'],
  },
  {
    index: '02',
    icon: FileSearch,
    title: 'Document AI',
    role: 'your knowledge base → answerable',
    description:
      'Turn manuals, tickets, contracts and internal docs into an assistant your team or your users can actually ask. Production RAG on your data, grounded in your sources, hosted and maintained by us.',
    chips: ['from $2,500 setup', '+ monthly hosting', 'your data stays yours'],
  },
];

export default function Services() {
  return (
    <section id="what-we-build" className="bg-paper py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="eyebrow">what we build</p>
          <h2 className="mt-5 max-w-2xl text-h2 font-display font-extrabold leading-tight tracking-[-0.02em] text-ink-900">
            Two ways to put real AI to work.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-500">
            No open-ended retainers to nowhere. Each engagement has a fixed
            scope, a fixed price, and a working system at the end.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {SERVICES.map((service) => (
            <motion.article
              key={service.index}
              variants={fadeUp}
              className="card flex flex-col gap-6 p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-ink-500">
                  {service.index}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-tint text-green">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-ink-900">
                  {service.title}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink-500">
                  {service.role}
                </p>
              </div>

              <p className="text-ink-500">{service.description}</p>

              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {service.chips.map((chip) => (
                  <span key={chip} className="chip">
                    {chip}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
