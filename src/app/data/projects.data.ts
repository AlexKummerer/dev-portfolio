export type ColorValueHex = `#${string}`;
export type ProjectStatus = 'live' | 'in-development' | 'planned' | 'angular-update';

export interface Project {
  id: string;
  title: { de: string; en: string };
  description: { de: string; en: string };
  technologies: string[];
  color: ColorValueHex;
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
}

export const STATUS_LABELS: Record<ProjectStatus, { de: string; en: string }> = {
  live: { de: 'Live', en: 'Live' },
  'in-development': { de: 'In Entwicklung', en: 'In Development' },
  planned: { de: 'Geplant', en: 'Planned' },
  'angular-update': { de: 'Angular-Update', en: 'Angular Update' },
};

export const PROJECTS: Project[] = [
  {
    id: 'mesmerist',
    title: {
      de: 'Mesmerist & Coaching',
      en: 'Mesmerist & Coaching',
    },
    description: {
      de: 'Statische Website für einen Mesmeristen und Coach im Westerwald. Klares, ruhiges Design mit Fokus auf Lesbarkeit und Conversion. Bewusst mit handgeschriebenem HTML und CSS umgesetzt.',
      en: 'Static website for a mesmerist and coach in the Westerwald region. Clean, calm design focused on readability and conversion. Built deliberately with hand-written HTML and CSS — no framework overhead.',
    },
    technologies: ['HTML5', 'CSS3'],
    color: '#475569',
    status: 'live',
    liveUrl: 'https://www.mesmerist.de',
  },
  {
    id: 'story-ai',
    title: {
      de: 'StoryAI — KI-Geschichten-Generator',
      en: 'StoryAI — AI Story Generator',
    },
    description: {
      de: 'Eine Anwendung, die mithilfe der OpenAI API individuelle Geschichten generiert. Das FastAPI-Backend verarbeitet Nutzereingaben und erstellt daraus einzigartige, KI-generierte Erzählungen. Ein Angular-Frontend ist in Entwicklung.',
      en: 'An application that generates individual stories using the OpenAI API. The FastAPI backend processes user input and turns it into unique, AI-generated narratives. An Angular frontend is in development.',
    },
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'Angular'],
    color: '#8B5CF6',
    status: 'in-development',
    githubUrl: 'https://github.com/AlexKummerer/story-ai',
  },
  {
    id: 'qr-shortlinker',
    title: {
      de: 'QR-Shortlinker — URL-Shortener & QR-Code-Manager',
      en: 'QR-Shortlinker — URL Shortener & QR Code Manager',
    },
    description: {
      de: 'Ein Full-Stack-Tool zum Kürzen von URLs und Generieren von QR-Codes. Das Angular-Frontend bietet ein übersichtliches Dashboard zur Verwaltung aller Links, während das FastAPI-Backend die Logik übernimmt. Gehostet auf Cloudflare.',
      en: 'A full-stack tool for shortening URLs and generating QR codes. The Angular frontend provides a clean dashboard to manage all links, while the FastAPI backend handles the logic. Hosted on Cloudflare.',
    },
    technologies: [
      'Angular',
      'FastAPI',
      'Python',
      'Cloudflare Pages',
      'Cloudflare Workers',
      'Cloudflare D1',
    ],
    color: '#06B6D4',
    status: 'planned',
  },
  {
    id: 'ring-of-fire',
    title: {
      de: 'Ring of Fire — Kartenspiel',
      en: 'Ring of Fire — Card Game',
    },
    description: {
      de: 'Die digitale Version des beliebten Trinkkartenspiels, umgesetzt als Single-Page-Application mit Angular. Spieler ziehen Karten und befolgen die jeweiligen Regeln.',
      en: 'The digital version of the popular drinking card game, built as a single-page application with Angular. Players draw cards and follow the rules — fully in the browser, no install required.',
    },
    technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
    color: '#F59E0B',
    status: 'angular-update',
    githubUrl: 'https://github.com/AlexKummerer/ringoffire',
  },
  {
    id: 'join',
    title: {
      de: 'Join — Task Manager',
      en: 'Join — Task Manager',
    },
    description: {
      de: 'Eine Aufgabenverwaltung mit Eisenhower-Matrix zur Priorisierung. Aufgaben können erstellt, kategorisiert und nach Dringlichkeit und Wichtigkeit sortiert werden, für eine effizientere Organisation des Arbeitsalltags.',
      en: 'A task manager using the Eisenhower matrix for prioritization. Tasks can be created, categorized, and sorted by urgency and importance — for more efficient daily organization.',
    },
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    color: '#10B981',
    status: 'angular-update',
    githubUrl: 'https://github.com/AlexKummerer/Join-main',
  },
];
