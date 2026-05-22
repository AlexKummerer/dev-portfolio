import {
  Component,
  DestroyRef,
  ElementRef,
  LOCALE_ID,
  afterNextRender,
  inject,
} from '@angular/core';
import { APPROACH } from '../../data/approach.data';

@Component({
  selector: 'app-approach',
  imports: [],
  templateUrl: './approach.html',
  styleUrl: './approach.scss',
})
export class Approach {
  private locale = inject(LOCALE_ID);
  private destroyRef = inject(DestroyRef);
  private el = inject(ElementRef);
  phases = APPROACH.map((p) => ({
    glyph: p.glyph,
    title: p.title[this.locale as 'de' | 'en'] ?? p.title['de'],
    text: p.text[this.locale as 'de' | 'en'] ?? p.text['de'],
  }));

  constructor() {
    afterNextRender(() => {
      const section = this.el.nativeElement as HTMLElement;

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        section.classList.add('visible');
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            section.classList.add('visible');
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );

      observer.observe(section);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
