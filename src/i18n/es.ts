import type { Dictionary } from './en';

export const es: Dictionary = {
  meta: {
    title: 'SINAPSEK — Estudio de ingeniería de IA | Automation Sprints y Document AI',
    description:
      'SINAPSEK es un estudio de ingeniería de IA de dos personas en Quito, Ecuador. Construimos agentes y document AI listos para producción para equipos SaaS y agencias — alcance fijo, en producción en 2–3 semanas. Agenda una auditoría gratuita.',
  },
  nav: {
    links: [
      { label: 'Qué hacemos', href: '#what-we-build' },
      { label: 'Cómo trabajamos', href: '#how-it-works' },
      { label: 'Precios', href: '#pricing' },
    ],
    bookCall: 'Agenda una llamada',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  hero: {
    eyebrow: 'Estudio de ingeniería de IA · Quito → el mundo',
    titleLead: 'Conectamos tu producto con',
    titleAccent: 'IA lista para producción.',
    subtitle:
      'SINAPSEK es un estudio de ingeniería de IA de dos personas. Construimos los agentes y el document-AI que tu SaaS o agencia necesita — alcance fijo, en producción en 2–3 semanas, sobre tu propio stack.',
    ctaPrimary: 'Agenda una auditoría gratuita',
    ctaSecondary: 'Ve qué construimos',
  },
  gap: {
    eyebrow: 'la brecha',
    titleLead: 'Todos quieren IA en su producto.',
    titleAccent: 'Casi nadie la ha puesto en producción.',
    body: 'Los equipos de SaaS prometen funciones de IA que se quedan en el backlog. Las agencias venden IA que no tienen con quién construir. Esa distancia — entre la demo y algo corriendo en producción — es donde trabajamos.',
  },
  services: {
    eyebrow: 'qué construimos',
    title: 'Dos formas de poner la IA a trabajar de verdad.',
    subtitle:
      'Nada de retainers abiertos que no llevan a ningún lado. Cada proyecto tiene alcance fijo, precio fijo y un sistema funcionando al final.',
    items: [
      {
        index: '01',
        title: 'Automation Sprint',
        role: 'un proceso manual → un agente',
        description:
          'Elige un flujo repetitivo — cotizaciones, triage de correos, reportes, extraer datos de documentos. Diseñamos, construimos y desplegamos un agente que lo hace. Ves avances cada semana, y el código es tuyo al final.',
        chips: ['2–3 semanas', 'desde $1,900', '50% por adelantado'],
      },
      {
        index: '02',
        title: 'Document AI',
        role: 'tu base de conocimiento → consultable',
        description:
          'Convierte manuales, tickets, contratos y documentos internos en un asistente al que tu equipo o tus usuarios realmente puedan preguntarle. RAG en producción sobre tus datos, con respuestas basadas en tus fuentes, alojado y mantenido por nosotros.',
        chips: ['desde $2,500 de setup', '+ hosting mensual', 'tus datos siguen siendo tuyos'],
      },
    ],
  },
  audiences: {
    eyebrow: 'para quién es',
    title: 'Hecho para los equipos que tienen que entregar IA.',
    items: [
      {
        tag: 'Equipos SaaS',
        title: 'Lanza la función de IA sin contratar un equipo de IA.',
        description:
          'Tú tienes el producto y los usuarios. Nosotros agregamos el copiloto, la búsqueda semántica, el document-AI — como una API limpia que tu equipo puede dominar — sin una contratación de seis meses.',
      },
      {
        tag: 'Agencias · marca blanca',
        title: 'Entrega IA a tus clientes, bajo tu marca.',
        description:
          'Vende el trabajo de IA que no puedes cubrir internamente. Lo construimos de forma invisible detrás de ti: tu marca al frente, ingenieros de IA senior detrás. Tú conservas la relación con el cliente.',
      },
    ],
  },
  process: {
    eyebrow: 'cómo funciona un sprint',
    title: 'De la primera llamada a producción, en tres pasos.',
    footer: 'tiempo típico 2–3 semanas · por hitos · 50% para iniciar',
    steps: [
      {
        number: '1',
        title: 'Alcance',
        description:
          'Una llamada corta para encontrar el proceso que vale la pena automatizar. Recibes una propuesta de alcance y precio fijo en 48 horas — nada de estimados vagos.',
      },
      {
        number: '2',
        title: 'Construcción',
        description:
          'Construimos a la vista. Un avance funcional cada semana, desplegado en un ambiente de staging que puedes probar y sobre el que puedes opinar.',
      },
      {
        number: '3',
        title: 'Entrega',
        description:
          'Desplegado en tu stack, documentado y entregado. El código es tuyo. Nos quedamos para hosting e iteración solo si tú lo quieres.',
      },
    ],
  },
  whyUs: {
    eyebrow: 'por qué sinapsek',
    title: 'Ingeniería senior, no un prototipo en un notebook.',
    reasons: [
      {
        icon: 'server',
        title: 'Producción, no prototipos',
        description:
          'Serverless en AWS — Lambda, Step Functions, Terraform — el mismo stack que corremos en producción hoy. Construido para mantenerse en pie, no para una demo única.',
      },
      {
        icon: 'workflow',
        title: 'Agentes con las herramientas más nuevas',
        description:
          'LangGraph, RAG, MCP y Agent Skills. La mayoría de los shops todavía no llegan a las herramientas agénticas — para nosotros es el punto de partida.',
      },
      {
        icon: 'userCheck',
        title: 'Liderado por sus fundadores',
        description:
          'Trabajas directo con los ingenieros que escriben el código. Sin account managers, sin traspasos.',
      },
      {
        icon: 'mic',
        title: 'Con nombre y cara',
        description:
          'Speakers en AWS Community Day Ecuador 2026 y GDG Quito. Construimos en público y respaldamos el trabajo.',
      },
      {
        icon: 'globe',
        title: 'Hecho para exportar',
        description:
          'Remoto, cubriendo zonas horarias de EE. UU. y Europa. Facturamos limpio en USD o EUR, sin fricción transfronteriza para ti.',
      },
      {
        icon: 'shield',
        title: 'Alcance fijo, riesgo compartido de verdad',
        description:
          'Apruebas el alcance y el precio antes de empezar. La auditoría que te lleva ahí no cuesta nada.',
      },
    ],
  },
  pricing: {
    eyebrow: 'precios',
    title: 'Precio claro desde el inicio, para que puedas decidir rápido.',
    subtitle:
      'Puntos de partida, no cotizaciones finales — cada proyecto se define según lo que realmente necesitas.',
    badge: 'Más elegido',
    footer:
      '¿No sabes cuál necesitas? Empieza con una auditoría gratuita — encontramos un proceso que valga la pena automatizar y te decimos, sin rodeos, si vale la pena.',
    plans: [
      {
        title: 'Automation Sprint',
        price: 'desde $1,900',
        priceNote: '(alcance fijo)',
        features: [
          'Un flujo de trabajo automatizado de principio a fin',
          'Sistema funcionando en 2–3 semanas',
          'Builds semanales en staging que puedes revisar',
          'El código y el despliegue son tuyos',
          '50% para iniciar, 50% contra entrega',
        ],
        cta: 'Inicia un Sprint',
        featured: true,
      },
      {
        title: 'Document AI',
        price: '$2,500 de setup',
        priceNote: '+ hosting mensual',
        features: [
          'Asistente basado en tus propias fuentes',
          'RAG en producción, alojado y mantenido',
          'Las respuestas citan de dónde salieron',
          'Tus datos siguen siendo tuyos, siempre',
          'Escala hacia un producto que puedes revender',
        ],
        cta: 'Conversemos',
        featured: false,
      },
    ],
  },
  faq: {
    eyebrow: 'preguntas frecuentes',
    title: 'Preguntas frecuentes.',
    items: [
      {
        question: '¿El resultado es nuestro?',
        answer:
          'Sí. Código, prompts, configuración de infraestructura — todo se entrega y es tuyo para siempre. El hosting con nosotros es opcional, nunca un lock-in.',
      },
      {
        question: '¿Pueden trabajar en marca blanca, bajo nuestra marca?',
        answer:
          'Es una de las formas principales en que trabajamos con agencias. Nos mantenemos invisibles: tu marca al frente, nuestra ingeniería detrás, y tú conservas la relación con el cliente.',
      },
      {
        question: '¿Qué tan rápido podemos empezar?',
        answer:
          'La llamada de auditoría se agenda en días. Si encajamos, recibes una propuesta fija en 48 horas y el Sprint suele arrancar la semana siguiente.',
      },
      {
        question: '¿Dónde están ubicados?',
        answer:
          'Quito, Ecuador, trabajando remoto en zonas horarias de EE. UU. y Europa. Facturación limpia en USD o EUR.',
      },
      {
        question: '¿Y si resulta que la IA no es la respuesta?',
        answer:
          'Entonces te lo decimos. La auditoría es gratuita y honesta — si un flujo no vale la pena automatizarlo, lo vas a saber antes de gastar nada.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'empecemos',
    title: 'Encontremos un proceso que valga la pena automatizar.',
    subtitle:
      'Una llamada de 20 minutos, una auditoría gratuita y una respuesta directa. Sin presentaciones, sin presión.',
    cta: 'Agenda una auditoría gratuita',
  },
  footer: {
    tagline: 'Hecho en Ecuador · entregado al mundo · © 2026',
    github: 'GitHub',
  },
};
