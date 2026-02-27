import { Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { Button } from 'primeng/button';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  imports: [Button],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private destroyRef = inject(DestroyRef);
  private el = inject(ElementRef);
  constructor() {
    afterNextRender(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        gsap.set('.hero-animate', { opacity: 1, y: 0 });
        return;
      }

      const ctx = gsap.context(() => {
        gsap.to('.hero-animate', {
          opacity: 10,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        });
      }, this.el.nativeElement);

      this.destroyRef.onDestroy(() => ctx.revert());
    });
  }
}
