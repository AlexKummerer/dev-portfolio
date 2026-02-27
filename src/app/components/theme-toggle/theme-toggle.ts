import { Component, signal, afterNextRender } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-theme-toggle',
  imports: [ToggleSwitchModule, FormsModule, ButtonModule],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle {
  darkMode = signal<boolean>(true);

  constructor() {
    afterNextRender(() => {
      const saved = localStorage.getItem('theme');
      if (saved) {
        this.darkMode.set(saved === 'dark');
      } else {
        this.darkMode.set(window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
      this.applyTheme();
    });
  }
  toggle() {
    this.darkMode.set(!this.darkMode());
    this.applyTheme();
    localStorage.setItem('theme', this.darkMode() ? 'dark' : 'light');
  }
  private applyTheme() {
    document.documentElement.classList.toggle('p-dark', this.darkMode());
  }
}
