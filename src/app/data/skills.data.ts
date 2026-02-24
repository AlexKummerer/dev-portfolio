export interface SkillCategory {
  name: string;
  coreSkills: string[];
  otherSkills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    name: 'Frontend',
    coreSkills: [
      'Angular',
      'React',
      'TypeScript',
      'SPFx',
      'PrimeNG',
      'HTML5',
      'CSS3/SCSS',
      'Responsive Design',
    ],
    otherSkills: ['Firebase', 'Material Design', 'Vitest'],
  },
  {
    name: 'Backend & Daten',
    coreSkills: ['Python', 'FastAPI', 'SQL', 'SQLite', 'REST APIs', 'MongoDB'],
    otherSkills: ['Selenium/pytest', 'OOP'],
  },
  {
    name: 'Automatisierung, KI & DevOps',
    coreSkills: [
      'n8n',
      'Azure OpenAI',
      'Azure Entra ID',
      'Azure App Service',
      'MS Graph API',
      'MCP-Server',
      'Cloudflare Pages',
      'Cloudflare Workers',
      'Cloudflare D1',
      'Cloudflare R2',
      'Git/GitHub',
    ],
    otherSkills: ['Docker', 'Jira/Confluence', 'Linux', 'CI/CD', 'Claude'],
  },
];
