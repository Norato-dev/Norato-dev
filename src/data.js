export const profile = {
  name: 'David Norato Ramírez',
  role: 'Frontend Engineer',
  location: 'Bogotá, Colombia',
  phone: '+57 314 414 7996',
  email: 'davidnoratoramirez@gmail.com',
  linkedin: 'https://www.linkedin.com/in/david-norato-ramirez/', // ← reemplaza con tu URL real
  github: 'https://github.com/Norato-dev/',        // ← reemplaza con tu URL real
  years: 5,
  appsShipped: 10,
  // award: 'Top 3 Dev 2024 — BBVA',
  summary:
    'Frontend Engineer con 5+ años construyendo apps web escalables y de alto rendimiento con React.js y TypeScript. Experto en arquitecturas basadas en componentes, optimización de performance y diseño de sistemas modulares.',
};

export const experience = [
  {
    company: 'EPAM NEORIS',
    role: 'Frontend Developer',
    period: 'sep 2025 — presente',
    bullets: [
      'Arquitecté módulos frontend escalables con React, Next.js y TypeScript para sistemas de visualización de datos de alto tráfico.',
      'Integré herramientas de IA en el flujo de desarrollo para automatizar debugging y optimizar la generación de código.',
      'Desarrollé módulos complejos de reportes y notificaciones consumiendo REST APIs para visibilidad de cuentas en tiempo real.',
      'Optimicé el rendimiento frontend implementando patrones de diseño modular y bibliotecas de componentes reutilizables.',
    ],
  },
  {
    company: 'MERAKI SOFTWARE TECHNOLOGIES',
    role: 'Frontend Developer',
    period: 'abr 2024 — ago 2025',
    bullets: [
      'Reconocido como Top 3 Developer 2024 para el cliente BBVA por excelencia técnica y entrega eficiente.',
      'Lideré la migración arquitectónica de un sistema crítico de autenticación basado en API, reduciendo significativamente la deuda técnica.',
      'Construí una librería de UI reutilizable con Web Components y LitElement para consistencia visual entre plataformas.',
      'Optimicé la comunicación cliente-servidor mediante consumo avanzado de APIs y manejo seguro de sesiones.',
    ],
  },
  {
    company: 'ACCENTURE',
    role: 'Frontend Consultant',
    period: 'sep 2023 — feb 2024',
    bullets: [
      'Resolví incidentes críticos de producción en aplicaciones React, optimizando HTML y CSS para renderizado sin errores.',
      'Implementé estrategias de business insights integrando data tagging y analytics tracking vía REST APIs.',
    ],
  },
  {
    company: 'BACKBONE TECHNOLOGY LATAM',
    role: 'Junior Fullstack Developer',
    period: 'mar 2020 — jun 2023',
    bullets: [
      'Entregué 10+ aplicaciones web fullstack incluyendo plataformas e-commerce y landing pages con React y Next.js.',
      'Gestioné el ciclo de desarrollo completo, desde integración de APIs hasta despliegue a producción usando GitFlow.',
    ],
  },
];

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3', 'SASS'],
  },
  {
    category: 'Frameworks',
    items: ['React.js', 'Next.js', 'LitElement', 'Web Components'],
  },
  {
    category: 'Testing',
    items: ['Jest', 'React Testing Library'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git / GitFlow', 'Bitbucket', 'Firebase', 'Supabase', 'Vercel'],
  },
  {
    category: 'Core Concepts',
    items: [
      'Component Architecture',
      'Performance Optimization',
      'Design Systems',
      'SEO',
      'Analytics',
      'REST APIs',
      'AI-driven Development',
      'Agile / Scrum',
    ],
    wide: true,
  },
];

export const projects = [
  {
    num: '01',
    type: 'Game Dev / Real-time',
    name: 'Typing RPG Game',
    description:
      'RPG web en tiempo real con generación dinámica de niveles y mecánicas multijugador. Combina progresión RPG clásica con combate por teclado.',
    stack: ['React', 'Firebase', 'Vercel', 'Real-time DB'],
    repo: 'https://github.com/Norato-dev/CodeTyping-RPG',
    url: 'https://code-typing.davidnorato.dev/',
    image: '/previews/typing-rpg.png', // ← screenshot del proyecto (colócalo en public/previews/)
  },
  {
    num: '02',
    type: 'Full-stack / Backend',
    name: 'URL Shortener',
    description:
      'Plataforma full-stack para acortar URLs con analytics en tiempo real. Incluye tracking de clicks, dispositivos y países, caché con Redis y dashboard de métricas.',
    stack: ['Next.js', 'PostgreSQL', 'Prisma', 'Redis', 'Vercel'],
    repo: 'https://github.com/Norato-dev/url-shortener',
    url: 'https://short.davidnorato.dev',
    image: '/previews/url-shortener.png',
  },
  {
    num: '03',
    type: 'AI / Design Tools',
    name: 'Palette AI',
    description:
      'Generador de paletas de colores con IA. Describe un estilo en texto libre y obtén 5 colores coherentes listos para exportar en CSS, Tailwind config o JSON. Incluye preview en componentes UI reales y guardado de favoritos.',
    stack: ['Next.js', 'Groq API', 'LLaMA 3.3', 'Tailwind CSS', 'Framer Motion'],
    repo: 'https://github.com/Norato-dev/color-palette-ai',
    url: 'https://color.davidnorato.dev',
    image: '/previews/palette-ai.png',
  },
  {
    num: '04',
    type: 'PWA / Push Notifications',
    name: 'Mis Recordatorios',
    description:
      'PWA de recordatorios con notificaciones push reales que llegan aunque el teléfono esté bloqueado. Instalable como app nativa, funciona offline via Service Worker + Workbox.',
    stack: ['React', 'Vite', 'Supabase', 'Web Push API', 'PWA', 'Vercel'],
    repo: 'https://github.com/Norato-dev/Reminders',
    url: 'https://recordatorios.davidnorato.dev/',
    image: '/previews/recordatorios.png',
  },
  {
    num: '05',
    type: 'Web App / Auth',
    name: 'Etch-a-Sketch App',
    description:
      'Aplicación de dibujo con almacenamiento persistente y autenticación de usuarios. Interacciones con canvas respaldadas por base de datos.',
    stack: ['JS', 'Supabase', 'Canvas API', 'Auth'],
    repo: 'https://github.com/Norato-dev/Proyecto-Programacion-Web',
    url: null,
    image: null,
  },
];
