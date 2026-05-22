export interface Phase {
  glyph: string; // "◇" | "◈" | "◆"
  title: { de: string; en: string };
  text: { de: string; en: string };
}

export const APPROACH: Phase[] = [
  {
    glyph: '◇',
    title: { de: 'Verstehen', en: 'Understand' },
    text: {
      de: 'Erst das Problem, dann die Lösung.',
      en: 'Problem first, solution second.',
    },
  },
  {
    glyph: '◈',
    title: { de: 'Bauen', en: 'Build' },
    text: {
      de: 'Iterativ, in kleinen Schritten, mit funktionierender Software nach jeder Iteration.',
      en: 'Iteratively, in small steps, with working software after each iteration.',
    },
  },
  {
    glyph: '◆',
    title: { de: 'Übergeben', en: 'Hand off' },
    text: {
      de: 'Dokumentation, Knowledge Transfer und Support, damit das Team danach selbstständig weiterbauen kann.',
      en: 'Documentation, knowledge transfer, and support, so the team can keep building on its own.',
    },
  },
];
