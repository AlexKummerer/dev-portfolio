import { NgClass } from '@angular/common';
import { Component, afterNextRender, signal } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-navbar',
  imports: [ToolbarModule, NgClass],
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
