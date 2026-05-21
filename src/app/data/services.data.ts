export interface Service {
  title: { de: string; en: string };
  description: { de: string; en: string };
}
export const SERVICES: Service[] = [
  {
    title: { de: 'Web-Anwendungen', en: 'Web applications' },
    description: {
      de: 'Moderne Web-Anwendungen, Single-Page-Apps, SSG-Sites und type-safe Architekturen. Performant, wartbar, im jeweils passenden Stack für das Projekt.',
      en: 'Modern web applications, single-page apps, SSG sites, and type-safe architectures. Performant, maintainable, in the right stack for each project.',
    },
  },
  {
    title: { de: 'KI-gestützte Services', en: 'AI-powered services' },
    description: {
      de: 'Backends mit Anbindung an LLMs, ob OpenAI, Anthropic, Azure oder Open-Source. Custom Chatbots, Document Intelligence und MCP-Server, in der passenden Sprache für jedes Projekt.',
      en: 'Backends with LLM integrations, OpenAI, Anthropic, Azure, or open-source. Custom chatbots, document intelligence, and MCP servers, in the right language for each project.',
    },
  },
  {
    title: { de: 'Prozessautomatisierung', en: 'Process automation' },
    description: {
      de: 'Workflows, die manuelle Arbeit eliminieren, mit n8n, Zapier, Make oder eigenem Code, je nachdem was passt. Anbindung an Datenbanken, APIs und Business-Tools.',
      en: 'Workflows that eliminate manual work, with n8n, Zapier, Make, or custom code, whichever fits. Integration with databases, APIs, and business tools.',
    },
  },
  {
    title: { de: 'KI-Agenten', en: 'AI agents' },
    description: {
      de: 'Autonome Agenten, die Aufgaben planen, Tools nutzen und mit bestehenden Systemen sprechen. Vom einfachen Assistant bis zum Multi-Step-Agent mit Tool-Use, Memory und Retrieval.',
      en: 'Autonomous agents that plan tasks, use tools, and talk to existing systems. From simple assistants to multi-step agents with tool use, memory, and retrieval.',
    },
  },
];
