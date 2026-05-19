export interface Principle {
  number: string;
  title: { de: string; en: string };
  text: { de: string; en: string };
}

export const PHILOSOPHY: Principle[] = [
  {
    number: '01',
    title: { de: 'Code ist Kommunikation', en: 'Code is communication' },
    text: {
      de: 'Lesbarkeit vor Cleverness. Jede Zeile spricht zu dem, der sie als Nächstes liest.',
      en: 'Readability over cleverness. Every line speaks to whoever reads it next.',
    },
  },
  {
    number: '02',
    title: { de: 'Komplexität ist eine Schuld', en: 'Complexity is a debt' },
    text: {
      de: 'Abstraktionen erst dann, wenn der Schmerz zweimal aufgetreten ist. Nie auf Vorrat.',
      en: 'Abstractions only after the pain shows up twice. Never on speculation.',
    },
  },
  {
    number: '03',
    title: {
      de: 'KI ist ein Werkzeug, kein Wundermittel',
      en: 'AI is a tool, not a miracle',
    },
    text: {
      de: 'Pragmatischer Einsatz dort, wo es Wert schafft — kein KI um der KI willen.',
      en: "Pragmatic use where it creates value — no AI for AI's sake.",
    },
  },
  {
    number: '04',
    title: { de: 'Lernen ist Teil der Arbeit', en: 'Learning is part of the job' },
    text: {
      de: 'Was heute Best Practice ist, ist morgen Legacy. Neugier ist nicht optional.',
      en: "Today's best practice is tomorrow's legacy. Curiosity isn't optional.",
    },
  },
];
