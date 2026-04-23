import { Component, computed, input } from '@angular/core';
import { Project } from '../../../data/projects.data';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [NgClass],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  project = input.required<Project>();
  statusConfig = computed(() => {
    const map: Record<string, { label: string; class: string }> = {
      live: { label: 'Live', class: 'status--live' },
      'in-development': { label: 'In Entwicklung', class: 'status--dev' },
      planned: { label: 'Geplant', class: 'status--planned' },
      'angular-update': { label: 'Angular-Update', class: 'status--update' },
    };
    return map[this.project().status];
  });
}
