import type { Dictionary } from './en';

export const es: Dictionary = {
  meta: {
    title: 'SINAPSEK — Estudio de ingeniería de IA | IA aplicada, lista para producción',
    description:
      'SINAPSEK es un estudio de ingeniería en Quito, Ecuador, que construye servicios de aplicaciones, datos e infraestructura de IA listos para producción para equipos empresariales — alcance fijo, ingenieros senior. Agenda un diagnóstico de IA gratuito.',
  },
  nav: {
    links: [
      { label: 'Servicios', href: '#what-we-build' },
      { label: 'Núcleo', href: '#nucleo' },
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Cómo trabajamos', href: '#how-it-works' },
      { label: 'Contacto', href: '#contacto' },
    ],
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  hero: {
    eyebrow: 'Ingeniería AI-first · aplicaciones, datos e infraestructura',
    titleLead: 'Tu empresa,',
    titleAccent: 'aumentada por IA',
    titleTrail: ', de punta a punta.',
    subtitle:
      'Modernizamos tus aplicaciones, activamos tus datos y operamos la infraestructura de IA que hace que todo funcione — con alcance y tiempos definidos, del emprendedor a la gran empresa.',
    ctaSecondary: 'Explora nuestros servicios',
    credibility: 'Ingeniería a producción sobre AWS · Speakers en AWS Community Day Ecuador 2026 y GDG Quito',
  },
  gap: {
    eyebrow: 'la brecha',
    titleLead: 'Todos quieren IA en su producto.',
    titleAccent: 'Casi nadie la ha puesto en producción.',
    body: 'Los equipos de SaaS prometen funciones de IA que se quedan en el backlog. Las agencias venden IA que no tienen con quién construir. Esa distancia — entre la demo y algo corriendo en producción — es donde trabajamos.',
  },
  services: {
    eyebrow: 'qué construimos',
    title: 'Tres formas de poner ingeniería detrás de tu roadmap.',
    subtitle:
      'En SINAPSEK la inteligencia artificial no es un servicio más: es el hilo que conecta todo. Modernizamos tus aplicaciones, activamos tus datos y operamos la infraestructura de IA que hace que todo funcione.',
    categories: [
      {
        icon: 'appWindow',
        title: 'Servicios de Aplicaciones',
        subtitle: 'Opera, construye y moderniza las aplicaciones de las que depende tu negocio, con IA integrada.',
        items: [
          'Desarrollo de aplicaciones (web, móvil y a medida con IA embebida desde el primer día)',
          'Gestión de aplicaciones (AMS) y evolución continua para que nunca se detengan',
          'Modernización de aplicaciones y mainframe (migración de sistemas legacy a la nube)',
          'Estrategia, arquitectura y gestión de carteras de aplicaciones empresariales',
          'Aplicaciones empresariales (integración de ERP, CRM e infraestructura conectada a IA)',
        ],
      },
      {
        icon: 'barChart',
        title: 'Datos y Analítica',
        subtitle: 'Convertimos tus datos en decisiones — y en el combustible de tu IA.',
        items: [
          'Plataformas e ingeniería de datos (pipelines, data warehouse y lakehouse listos para IA)',
          'Visualización de datos y decisiones empresariales (tableros BI claros)',
          'Consultoría de IA (identificación de casos de uso con alto retorno y diseño de hoja de ruta)',
        ],
      },
      {
        icon: 'cpu',
        title: 'Infraestructura y Servicios de IA',
        subtitle: 'La base operativa aplicada, segura, confiable y bajo control para tu IA en producción.',
        items: [
          'Servicios de IA (agentes en producción, asistentes RAG e integración de foundation models)',
          'Infraestructura de IA (AI Ops, despliegue serverless, LLMOps, monitoreo y costos)',
          'Gobernanza y seguridad de IA (trazabilidad, cumplimiento y control de datos)',
        ],
      },
    ],
    diagnosticCard: {
      title: 'Diagnóstico de IA gratuito',
      description: 'Encontramos el proceso donde la IA genera más retorno y proponemos el primer caso de uso, con alcance y precio fijo.',
      cta: 'Solicita un Diagnóstico Gratuito',
    },
  },
  nucleo: {
    eyebrow: 'producto estrella',
    title: 'SINAPSEK Núcleo',
    subtitle: 'La capa de IA de tu empresa — conectada a tu negocio, creciendo contigo.',
    concept: 'Núcleo es la capa de inteligencia artificial de tu empresa — la conectamos a tu negocio y crece contigo, del primer asistente hasta la transformación completa.',
    diagnosticTitle: 'La puerta de entrada: Diagnóstico de IA',
    diagnosticDesc: 'Una auditoría corta y gratuita: encontramos el proceso donde la IA genera más retorno y proponemos el primer caso de uso, con alcance y precio fijo.',
    diagnosticCta: 'Solicita un Diagnóstico Gratuito',
    tiers: [
      {
        id: 'emprende',
        name: 'Núcleo Emprende',
        subtitle: 'Para micro y pequeñas empresas. Tu primera IA en producción, sin equipo técnico.',
        features: [
          'Un agente de IA para ventas y atención al cliente (WhatsApp / web)',
          'Conectado a tu catálogo de productos e información de negocio',
          'Responde, cotiza, agenda y da seguimiento — 24/7',
          'Tablero simple para ver las interacciones de clientes y rendimiento',
        ],
        price: 'Setup bajo + suscripción mensual accesible',
        featured: false,
      },
      {
        id: 'crece',
        name: 'Núcleo Crece',
        subtitle: 'Para medianas empresas y en expansión. Automatiza tu operación y decide con datos.',
        features: [
          'Automatización de procesos internos (reportes, cotizaciones, extracción de datos de documentos)',
          'Asistente sobre tus datos (RAG) privado para tu equipo de trabajo',
          'Tablero de decisiones (Data & Analytics) con tus métricas reales',
        ],
        price: 'Proyecto con alcance fijo + mantenimiento y hosting mensual',
        featured: true,
      },
      {
        id: 'corporativo',
        name: 'Núcleo Corporativo',
        subtitle: 'Para grandes empresas. Transformación con IA, de punta a punta a escala.',
        features: [
          'Todo lo de los tres pilares a medida: modernización, datos, infraestructura y gobernanza de IA',
          'Agentes empresariales complejos multi-modelo y pipeline LLMOps personalizado',
          'Equipo de ingeniería dedicado y hoja de ruta tecnológica plurianual',
        ],
        price: 'Contrato a medida (proyecto por hitos + servicio gestionado / SLA)',
        featured: false,
      },
    ],
    tierCta: 'Hablemos',
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
  nosotros: {
    eyebrow: 'nosotros',
    title: 'Nuestra Identidad y Principios',
    purpose: {
      title: 'Propósito',
      text: 'Que toda organización, del emprendedor a la gran empresa, pueda operar aumentada por inteligencia artificial.',
    },
    mission: {
      title: 'Misión',
      text: 'Diseñamos, construimos, modernizamos y operamos aplicaciones, plataformas de datos e infraestructura de IA que convierten la tecnología en resultados de negocio medibles — con la inteligencia artificial como hilo conductor de todo lo que hacemos.',
    },
    vision: {
      title: 'Visión',
      text: 'Ser el socio tecnológico AI-first de referencia en la región andina: una empresa que lleva la IA aplicada de la promesa a la producción, y que exporta productos y talento al mundo.',
    },
    principlesTitle: 'Lo que nos hace distintos',
    principles: [
      {
        icon: 'server',
        title: 'Producción, no prototipos',
        description: 'Entregamos sistemas que las empresas usan de verdad todos los días en su operación real, no demos de usar y tirar.',
      },
      {
        icon: 'workflow',
        title: 'IA con propósito de negocio',
        description: 'Cada solución nace de un caso de uso comercial claro, diseñado para generar un retorno de inversión real y medible.',
      },
      {
        icon: 'shield',
        title: 'Alcance y transparencia',
        description: 'Precios y tiempos de entrega fijos definidos antes de empezar, reduciendo riesgos y eliminando sorpresas.',
      },
      {
        icon: 'userCheck',
        title: 'Tuyo desde el día uno',
        description: 'El código, los prompts, los datos y las configuraciones de infraestructura son del cliente. Sin lock-in ni dependencias.',
      },
    ],
  },
  process: {
    eyebrow: 'cómo trabajamos',
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
          'La llamada de diagnóstico se agenda en días. Si encajamos, recibes una propuesta de alcance fijo en 48 horas y el proyecto suele arrancar la semana siguiente.',
      },
      {
        question: '¿Trabajan con sistemas legacy y mainframe?',
        answer:
          'Sí. La modernización de aplicaciones y mainframe es una de nuestras líneas de servicio principales — la planteamos como una migración por fases con puntos de control funcionando, no como un reemplazo total de una sola vez.',
      },
      {
        question: '¿Dónde están ubicados?',
        answer:
          'Quito, Ecuador, trabajando remoto en zonas horarias de EE. UU. y Europa. Facturación limpia en USD o EUR.',
      },
      {
        question: '¿Y si resulta que la IA no es la respuesta?',
        answer:
          'Entonces te lo decimos. El diagnóstico es gratuito y honesta — si un flujo no vale la pena automatizarlo, lo vas a saber antes de gastar nada.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'empecemos',
    title: 'Encontremos el proceso donde la IA genera más retorno.',
    subtitle:
      'Una llamada de 20 minutos, un Diagnóstico de IA gratuito y una respuesta directa. Sin presentaciones de diapositivas, sin presión.',
    cta: 'Agenda tu Diagnóstico de IA gratuito',
  },
  footer: {
    tagline: 'Hecho en Ecuador · entregado al mundo · © 2026',
    github: 'GitHub',
  },
};
