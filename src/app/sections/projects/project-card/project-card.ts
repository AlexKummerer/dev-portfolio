import { Component, LOCALE_ID, computed, inject, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Project, ProjectStatus, STATUS_LABELS } from '../../../data/projects.data';

export type ResolvedProject = Omit<Project, 'title' | 'description'> & {
  title: string;
  description: string;
};

@Component({
  selector: 'app-project-card',
  imports: [NgClass],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  private locale = inject(LOCALE_ID);

  project = input.required<ResolvedProject>();

  statusConfig = computed(() => {
    const lang = (this.locale as 'de' | 'en') ?? 'de';
    const classMap: Record<ProjectStatus, string> = {
      live: 'status--live',
      'in-development': 'status--dev',
      planned: 'status--planned',
      'angular-update': 'status--update',
    };
    const status = this.project().status;
    return {
      label: STATUS_LABELS[status][lang] ?? STATUS_LABELS[status].de,
      class: classMap[status],
    };
  });
}
