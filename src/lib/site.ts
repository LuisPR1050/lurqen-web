// Todos los datos editables del sitio en un solo lugar.

export const site = {
  name: "LURQEN",
  tagline: "Software · AI · Automation",
  url: "https://lurqen-web.vercel.app/", // TODO: tu dominio final
  description:
    "Desarrollo de software a la medida y automatizaciones con IA para negocios que quieren crecer sin multiplicar su trabajo operativo.",
  city: "Bogotá, Colombia",

  founder: {
    name: "Luis Peña",
    role: "CEO y fundador",
    photo: null as string | null, // TODO: ej. "/luis-pena.jpg" en /public
  },

  whatsapp: "573147845192", // indicativo 57 + número
  whatsappDisplay: "+57 314 784 5192",
  whatsappMessage: "Hola Luis, quiero hablar sobre un proyecto con LURQEN.",
  email: "luisruidiaz7002@gmail.com",
  tiktok: "lurqen", // TODO: tu usuario de TikTok, sin @
};

export function whatsappLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const capabilities = [
  "Aplicaciones web",
  "CRMs a la medida",
  "Chatbots de WhatsApp",
  "Automatizaciones con IA",
  "Dashboards",
  "APIs e integraciones",
  "Landing pages",
  "Sistemas internos",
];

export const ideaExamples = [
  "Un CRM para mi inmobiliaria",
  "Automatizar mis cotizaciones",
  "Un bot que agende citas",
];

export const services = [
  {
    kind: "software" as const,
    title: "Software a la medida",
    description:
      "Sistemas web, apps y plataformas construidas para cómo funciona tu negocio, no al revés.",
    items: [
      "Aplicaciones web y móviles",
      "CRMs y sistemas internos",
      "APIs e integraciones",
      "Landing pages que convierten",
    ],
  },
  {
    kind: "ai" as const,
    title: "Automatizaciones con IA",
    description:
      "Agentes y flujos que hacen el trabajo repetitivo por ti, todos los días, a toda hora.",
    items: [
      "Asistentes de IA en WhatsApp y web",
      "Flujos automáticos entre tus herramientas",
      "Agendamiento y seguimiento sin intervención",
      "Reportes que se generan solos",
    ],
  },
];

export const projects = [
  {
    name: "MInmo",
    kind: "Plataforma inmobiliaria",
    summary:
      "Sitio público de inmuebles y panel de gestión para un asesor inmobiliario independiente. Todo el negocio en un solo lugar: de la captación del inmueble a la firma del contrato.",
    modules: [
      "Fichas de inmuebles con galería y contacto por WhatsApp",
      "Propietarios, captación y atención al cliente",
      "Negociación, documentación y contratos de corretaje",
      "Marketing y publicaciones",
    ],
    stack: ["Next.js", "Supabase", "TypeScript"],
    shots: [
      { src: "/projects/minmo-sitio.png", label: "Sitio público", width: 1894, height: 882 },
      { src: "/projects/minmo-panel.png", label: "Panel de gestión", width: 1902, height: 901 },
    ],
  },
  {
    name: "Trading Risk Manager",
    kind: "Herramienta para traders",
    summary:
      "App para operar con disciplina: calcula el tamaño de cada posición según el riesgo y registra cada operación para medir resultados reales.",
    modules: [
      "Dashboard con P&L, win rate, expectancy y curva de equity",
      "Calculadora de riesgo y lotaje en tiempo real",
      "Journal de operaciones y plan de trading",
      "Seguimiento emocional por operación",
    ],
    stack: ["React", "TypeScript"],
    shots: [
      { src: "/projects/trm-dashboard.png", label: "Dashboard", width: 1876, height: 892 },
      { src: "/projects/trm-calculadora.png", label: "Calculadora de riesgo", width: 1906, height: 895 },
    ],
  },
];

export const buildSteps = [
  "Diseñamos la interfaz.",
  "Construimos el backend.",
  "Conectamos la IA.",
  "Automatizamos lo repetitivo.",
];

export const processSteps = [
  {
    title: "Entendemos tu negocio",
    text: "Una conversación para conocer tu proceso y lo que quieres lograr.",
  },
  {
    title: "Prototipo navegable",
    text: "Ves y pruebas la idea antes de escribir el código final.",
  },
  {
    title: "Desarrollo a la medida",
    text: "Construimos por etapas, con avances que puedes revisar.",
  },
  {
    title: "Automatizaciones con IA",
    text: "Conectamos tus herramientas y quitamos el trabajo repetitivo.",
  },
  {
    title: "Lanzamiento y soporte",
    text: "Publicamos, medimos y seguimos mejorando contigo.",
  },
];

export const principles = [
  {
    title: "Seguridad desde el diseño",
    text: "Buenas prácticas de ciberseguridad en cada proyecto: datos protegidos, accesos controlados y conexiones cifradas.",
  },
  {
    title: "Entregas por etapas",
    text: "Ves avances reales en cada fase y decides con información, no con promesas.",
  },
  {
    title: "Soporte después del lanzamiento",
    text: "Te acompañamos mientras tu negocio crece y tu software necesita evolucionar.",
  },
];
