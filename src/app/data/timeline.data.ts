export type TimelineType = 'employment' | 'freelance' | 'education' | 'training';

export interface TimeLineEntry {
  period: string;
  title: { de: string; en: string };
  company: string;
  type: TimelineType;
  current: boolean;
  techStack?: string[];
  description?: { de: string; en: string };
  companyUrl?: string;
}

export const TIMELINE_ENTRY: TimeLineEntry[] = [
  {
    period: '2013 - 2016',
    title: {
      de: 'Kaufmann für Speditions- und Logistikdienstleistungen',
      en: 'Apprenticeship: Freight Forwarding & Logistics Services',
    },
    company: 'Hellmann Worldwide Logistics',
    type: 'training',
    current: false,
    techStack: ['ATLAS', 'Hellmann-Speditionssoftware', 'MS Office'],
    companyUrl: 'https://www.hellmann.com',
    description: {
      de: 'Dreijährige Ausbildung im internationalen Speditions- und Logistikbereich. Schwerpunkte: Zollabwicklung, Frachtkalkulation und Kundenbetreuung im globalen Warenverkehr.',
      en: 'Three-year apprenticeship in international freight forwarding and logistics. Focus areas: customs clearance, freight calculation, and customer service in global trade.',
    },
  },
  {
    period: '2016 - 2018',
    title: { de: 'Airfreight Export Agent', en: 'Airfreight Export Agent' },
    company: 'Hellmann Worldwide Logistics',
    type: 'employment',
    current: false,
    techStack: ['ATLAS', 'Hellmann-Speditionssoftware', 'MS Office'],
    description: {
      de: 'Betreuung komplexer Luftfrachtprojekte für Automotive-Kunden inkl. Angebotserstellung und Zollabwicklung. Übernahme von Projektverantwortung und eigenständige Kundenbetreuung.',
      en: 'Managed complex air freight projects for automotive clients including quoting and customs clearance. Took on project ownership and independent customer relationships.',
    },
    companyUrl: 'https://www.hellmann.com',
  },
  {
    period: '2018 - 2021',
    title: { de: 'Airfreight Export Agent', en: 'Airfreight Export Agent' },
    company: 'GEODIS',
    type: 'employment',
    current: false,
    techStack: ['ATLAS', 'CargoWise', 'MS Office'],
    description: {
      de: 'Digitalisierung von Logistikprozessen mit einer Effizienzsteigerung von 30%. Sichere Gefahrgut-Abwicklung nach internationalen Standards (IATA DGR).',
      en: 'Digitalized logistics processes, increasing efficiency by 30%. Safe handling of dangerous goods according to international standards (IATA DGR).',
    },
    companyUrl: 'https://www.geodis.com',
  },
  {
    period: '2020 - 2021',
    title: { de: 'Frontend Development', en: 'Frontend Development' },
    company: 'Developer Akademie',
    type: 'education',
    current: false,
    description: {
      de: 'Berufsbegleitende Weiterbildung zum Web-Entwickler. Praxisprojekte wie ein Task Application Manager mit Angular und Firebase-Backend.',
      en: 'Part-time professional training as a web developer. Hands-on projects like a task application manager with Angular and Firebase backend.',
    },
    techStack: ['JavaScript', 'TypeScript', 'Angular', 'HTML', 'SCSS', 'Firebase', 'Git', 'Scrum'],
    companyUrl: 'https://developerakademie.com',
  },
  {
    period: '2021',
    title: { de: 'Frontend Developer', en: 'Frontend Developer' },
    company: 'be+ GmbH',
    type: 'employment',
    current: false,
    techStack: ['Angular', 'TypeScript', 'REST APIs', 'HTML', 'SCSS'],
    description: {
      de: 'Automatisierung von HR-Prozessen mit wiederverwendbaren Komponenten und API-Integrationen. Entwicklung eines Renten-Klassifizierungsalgorithmus mit >40% Steigerung in Genauigkeit und Tempo.',
      en: 'Automated HR processes with reusable components and API integrations. Built a pension classification algorithm with >40% improvement in accuracy and speed.',
    },
    companyUrl: 'https://www.beplus.digital',
  },
  {
    period: '2021 – 2023',
    title: { de: 'React Developer', en: 'React Developer' },
    company: 'IPI GmbH',
    type: 'employment',
    current: false,
    techStack: ['React', 'SPFx', 'TypeScript', 'SharePoint', 'Microsoft 365'],
    description: {
      de: 'Konzeption und Entwicklung von M365-Webparts für Nachrichten, Events und Dokumente. Optimierung einer Fachbuch-App (>3.000 Titel) mit 20% schnelleren Ladezeiten.',
      en: 'Designed and built M365 web parts for news, events, and documents. Optimized a technical-book app (>3,000 titles) with 20% faster load times.',
    },
    companyUrl: 'https://www.ipi-gmbh.com',
  },
  {
    period: '2024 – 2025',
    title: { de: 'Software Engineering', en: 'Software Engineering' },
    company: 'Masterschool',
    type: 'education',
    current: false,
    techStack: ['Python', 'Flask', 'FastAPI', 'Pytest', 'Selenium', 'SQLite', 'OpenAI'],
    description: {
      de: 'Intensives Software-Engineering-Programm mit Fokus auf Backend-Entwicklung. Praxisprojekte wie eine Film-Webanwendung mit Flask, automatisierte Tests und Spezialisierung auf Prompt-Engineering für KI-Anwendungen.',
      en: 'Intensive software engineering program focused on backend development. Hands-on projects such as a movie web app with Flask, automated tests, and a specialization in prompt engineering for AI applications.',
    },
    companyUrl: 'https://www.masterschool.com',
  },
  {
    period: '2024',
    title: { de: 'Freelance Software-Entwickler', en: 'Freelance Software Developer' },
    company: '—',
    type: 'freelance',
    current: false,
    techStack: ['Python', 'FastAPI', 'SQLite', 'REST APIs'],
    description: {
      de: 'Entwicklung eines bidirektionalen Synchronisationssystems mit FastAPI zur konsistenten Terminverwaltung für >40 Benutzer über zwei Plattformen hinweg.',
      en: 'Built a bidirectional synchronization system with FastAPI for consistent appointment management for >40 users across two platforms.',
    },
  },
  {
    period: 'Seit 2025',
    title: { de: 'Software Developer', en: 'Software Developer' },
    company: 'WITTL Informationstechnologie',
    type: 'employment',
    current: true,
    techStack: ['Angular', 'Python', 'Azure OpenAI', 'MCP', 'n8n'],
    description: {
      de: 'Entwicklung moderner Webanwendungen mit Angular und Python. Aufbau eines unternehmensinternen KI-Chatbots mit Azure OpenAI und Prozessautomatisierung mit n8n.',
      en: 'Building modern web applications with Angular and Python. Built an internal AI chatbot with Azure OpenAI and process automation with n8n.',
    },
    companyUrl: 'https://www.wittl.com',
  },
];
