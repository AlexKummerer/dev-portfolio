import { NgClass } from '@angular/common';
import { Component, afterNextRender, signal } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ThemeToggle } from "../theme-toggle/theme-toggle";

@Component({
  selector: 'app-navbar',
  imports: [ToolbarModule, NgClass, ThemeToggle],
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
