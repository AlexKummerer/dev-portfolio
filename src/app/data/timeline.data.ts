export type TimelineType = 'employment' | 'freelance' | 'education' | 'training';

export interface TimeLineEntry {
  period: string;
  title: string;
  company: string;
  type: TimelineType;
  current: boolean;
  techStack?: string[];
  description?: string;
  companyUrl?: string;
}
export const TIMELINE_ENTRY: TimeLineEntry[] = [
  {
    period: '2013 - 2016',
    title: 'Kaufmann für Speditions- und Logistikdienstleistungen',
    company: 'Hellmann Worldwide Logistics',
    type: 'training',
    current: false,
    techStack: ['ATLAS', 'Hellmann-Speditionssoftware', 'MS Office'],
    companyUrl: 'https://www.hellmann.com',
    description:
      'Dreijährige Ausbildung im internationalen Speditions- und Logistikbereich. Schwerpunkte: Zollabwicklung, Frachtkalkulation und Kundenbetreuung im globalen Warenverkehr.',
  },
  {
    period: '2016 - 2018',
    title: 'Airfreight Export Agent',
    company: 'Hellmann Worldwide Logistics',
    type: 'employment',
    current: false,
    techStack: ['ATLAS', 'Hellmann-Speditionssoftware', 'MS Office'],
    description:
      'Betreuung komplexer Luftfrachtprojekte für Automotive-Kunden inkl. Angebotserstellung und Zollabwicklung. Übernahme von Projektverantwortung und eigenständige Kundenbetreuung.',
    companyUrl: 'https://www.hellmann.com',
  },
  {
    period: '2018 - 2021',
    title: 'Airfreight Export Agent',
    company: 'GEODIS',
    type: 'employment',
    current: false,
    techStack: ['ATLAS', 'CargoWise', 'MS Office'],
    description:
      'Digitalisierung von Logistikprozessen mit einer Effizienzsteigerung von 30%. Sichere Gefahrgut-Abwicklung nach internationalen Standards (IATA DGR).',
    companyUrl: 'https://www.geodis.com',
  },
  {
    period: '2020 - 2021',
    title: 'Frontend Development',
    company: 'Developer Akademie',
    type: 'education',
    current: false,
    description:
      'Berufsbegleitende Weiterbildung zum Web-Entwickler. Praxisprojekte wie ein Task Application Manager mit Angular und Firebase-Backend.',
    techStack: ['JavaScript', 'TypeScript', 'Angular', 'HTML', 'SCSS', 'Firebase', 'Git', 'Scrum'],
    companyUrl: 'https://developerakademie.com',
  },
  {
    period: '2021',
    title: 'Frontend Developer',
    company: 'be+ GmbH',
    type: 'employment',
    current: false,
    techStack: ['Angular', 'TypeScript', 'REST APIs', 'HTML', 'SCSS'],
    description:
      'Automatisierung von HR-Prozessen mit wiederverwendbaren Komponenten und API-Integrationen. Entwicklung eines Renten-Klassifizierungsalgorithmus mit >40% Steigerung in Genauigkeit und Tempo.',
    companyUrl: 'https://www.beplus.digital',
  },
  {
    period: '2021 – 2023',
    title: 'React Developer',
    company: 'IPI GmbH',
    type: 'employment',
    current: false,
    techStack: ['React', 'SPFx', 'TypeScript', 'SharePoint', 'Microsoft 365'],
    description:
      'Konzeption und Entwicklung von M365-Webparts für Nachrichten, Events und Dokumente. Optimierung einer Fachbuch-App (>3.000 Titel) mit 20% schnelleren Ladezeiten.',
    companyUrl: 'https://www.ipi-gmbh.com',
  },
  {
    period: '2024 – 2025',
    title: 'Software Engineering',
    company: 'Masterschool',
    type: 'education',
    current: false,
    techStack: ['Python', 'Flask', 'FastAPI', 'Pytest', 'Selenium', 'SQLite', 'OpenAI'],
    description:
      'Intensives Software-Engineering-Programm mit Fokus auf Backend-Entwicklung. Praxisprojekte wie eine Film-Webanwendung mit Flask, automatisierte Tests und Spezialisierung auf Prompt-Engineering für KI-Anwendungen.',
    companyUrl: 'https://www.masterschool.com',
  },
  {
    period: '2024',
    title: 'Freelance Software-Entwickler',
    company: '—',
    type: 'freelance',
    current: false,
    techStack: ['Python', 'FastAPI', 'SQLite', 'REST APIs'],
    description:
      'Entwicklung eines bidirektionalen Synchronisationssystems mit FastAPI zur konsistenten Terminverwaltung für >40 Benutzer über zwei Plattformen hinweg.',
  },
  {
    period: 'Seit 2025',
    title: 'Software Developer',
    company: 'WITTL Informationstechnologie',
    type: 'employment',
    current: true,
    techStack: ['Angular', 'Python', 'Azure OpenAI', 'MCP', 'n8n'],
    description:
      'Entwicklung moderner Webanwendungen mit Angular und Python. Aufbau eines unternehmensinternen KI-Chatbots mit Azure OpenAI und Prozessautomatisierung mit n8n.',
    companyUrl: 'https://www.wittl.com',
  },
];
