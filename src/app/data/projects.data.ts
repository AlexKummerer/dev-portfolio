export type ColorValueHex = `#${string}`;
export type ProjectStatus = 'live' | 'in-development' | 'planned' | 'angular-update';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  color: ColorValueHex;
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'story-ai',
    title: 'StoryAI — KI-Geschichten-Generator',
    description:
      'Eine Anwendung, die mithilfe der OpenAI API individuelle Geschichten generiert. Das FastAPI-Backend verarbeitet Nutzereingaben und erstellt daraus einzigartige, KI-generierte Erzählungen. Ein Angular-Frontend ist in Entwicklung.',
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'Angular'],
    color: '#8B5CF6',
    status: 'in-development',
    githubUrl: 'https://github.com/AlexKummerer/story-ai',
  },
  {
    id: 'qr-shortlinker',
    title: 'QR-Shortlinker — URL-Shortener & QR-Code-Manager',
    description: $localize`:@@project.qrshortlinker.desc:Ein Full-Stack-Tool zum Kürzen von URLs und Generieren von QR-Codes. Das Angular-Frontend bietet ein übersichtliches Dashboard zur Verwaltung aller Links, während das FastAPI-Backend die Logik übernimmt. Gehostet auf Cloudflare.`,
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
    title: 'Ring of Fire — Kartenspiel',
    description:
      'Die digitale Version des beliebten Trinkkartenspiels, umgesetzt als Single-Page-Application mit Angular. Spieler ziehen Karten und befolgen die jeweiligen Regeln — komplett im Browser, ohne Installation.',
    technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
    color: '#F59E0B',
    status: 'live',
    githubUrl: 'https://github.com/AlexKummerer/ring-of-fire',
    liveUrl: 'https://ringoffire.alexkummerer.de',
  },
  {
    id: 'join',
    title: 'Join — Task Manager',
    description:
      'Eine Aufgabenverwaltung mit Eisenhower-Matrix zur Priorisierung. Aufgaben können erstellt, kategorisiert und nach Dringlichkeit und Wichtigkeit sortiert werden — für eine effizientere Organisation des Arbeitsalltags.',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    color: '#10B981',
    status: 'angular-update',
    githubUrl: 'https://github.com/AlexKummerer/join',
    liveUrl: 'https://join.alexkummerer.de',
  },
  {
    id: 'alex-bringts',
    title: 'Alex bringts... — Online Food Ordering',
    description:
      'Eine Web-App für Online-Essensbestellungen. Nutzer können Gerichte auswählen, in den Warenkorb legen und eine Bestellung aufgeben — mit übersichtlichem UI und einfacher Bedienung.',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    color: '#EF4444',
    status: 'angular-update',
    githubUrl: 'https://github.com/AlexKummerer/alex-bringts',
    liveUrl: 'https://alexbringts.alexkummerer.de',
  },
];
