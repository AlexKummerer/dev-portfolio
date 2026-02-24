type TimelineType = 'employment' | 'freelance' | 'education' | 'training';

export interface TimeLineEntry {
  period: string;
  title: string;
  company: string;
  type: TimelineType;
  current: boolean;
  techStack?: string[];
}
export const TIMELINE: TimeLineEntry[] = [
  {
    period: '2013 – 2016',
    title: 'Kaufmann für Speditions- und Logistikdienstleistungen',
    company: 'Hellmann Worldwide Logistics',
    type: 'training',
    current: false,
  },
  {
    period: '2016 – 2018',
    title: 'Airfreight Export Agent',
    company: 'Hellmann Worldwide Logistics',
    type: 'employment',
    current: false,
  },
  {
    period: '2018 – 2021',
    title: 'Airfreight Export Agent',
    company: 'GEODIS',
    type: 'employment',
    current: false,
  },
  {
    period: '2020 – 2021',
    title: 'Frontend Development',
    company: 'Developer Akademie',
    type: 'education',
    current: false,
    techStack: ['JavaScript', 'TypeScript', 'Angular', 'Scrum'],
  },
  {
    period: '2021',
    title: 'Frontend Developer',
    company: 'be+ GmbH',
    type: 'employment',
    current: false,
    techStack: ['Angular', 'TypeScript', 'REST APIs'],
  },
  {
    period: '2021 – 2023',
    title: 'React Developer',
    company: 'IPI GmbH',
    type: 'employment',
    current: false,
    techStack: ['React', 'SPFx', 'TypeScript', 'SharePoint'],
  },
  {
    period: '2024 – 2025',
    title: 'Software Engineering',
    company: 'Masterschool',
    type: 'education',
    current: false,
    techStack: ['Python', 'Flask', 'Testing', 'AWS'],
  },
  {
    period: '2024',
    title: 'Freelance Software-Entwickler',
    company: '—',
    type: 'freelance',
    current: false,
    techStack: ['Python', 'REST APIs', 'SQL'],
  },
  {
    period: 'Seit 2025',
    title: 'Software Developer',
    company: 'WITTL Informationstechnologie',
    type: 'employment',
    current: true,
    techStack: ['Angular', 'Python', 'Azure OpenAI', 'n8n'],
  },
];
