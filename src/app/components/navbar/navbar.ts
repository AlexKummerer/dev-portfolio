import { NgClass } from '@angular/common';
import { Component, afterNextRender, signal } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import { LangSwitch } from "../lang-switch/lang-switch";

@Component({
  selector: 'app-navbar',
  imports: [ToolbarModule, NgClass, ThemeToggle, LangSwitch],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  scrolled = signal(false);

  constructor() {
    afterNextRender(() => {
      window.addEventListener('scroll', () => {
        this.scrolled.set(window.scrollY > 50);
      });
    });
  }
}
