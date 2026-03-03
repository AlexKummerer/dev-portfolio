import { Component } from '@angular/core';
import { SKILLS } from '../../data/skills.data';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  categories = SKILLS;

  categoryIcons: Record<string, string> = {
    Frontend: 'pi pi-desktop',
    'Backend & Daten': 'pi pi-server',
    'Automatisierung, KI & DevOps': 'pi pi-cog',
  };

  categoryColors: Record<string, string> = {
    Frontend: '#3B82F6',
    'Backend & Daten': '#10B981',
    'Automatisierung, KI & DevOps': '#8B5CF6',
  };
}
