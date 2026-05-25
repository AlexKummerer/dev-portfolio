import { Component, LOCALE_ID, inject } from '@angular/core';
import { PROJECTS } from '../../data/projects.data';
import { ProjectCard, ResolvedProject } from './project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private locale = inject(LOCALE_ID);

  projects: ResolvedProject[] = PROJECTS.map((p) => {
    const lang = (this.locale as 'de' | 'en') ?? 'de';
    return {
      ...p,
      title: p.title[lang] ?? p.title.de,
      description: p.description[lang] ?? p.description.de,
    };
  });
}
