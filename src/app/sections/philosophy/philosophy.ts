import {
  Component,
  DestroyRef,
  ElementRef,
  LOCALE_ID,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';
import { PHILOSOPHY } from '../../data/philosopy.data';

@Component({
  selector: 'app-philosophy',
  imports: [],
  templateUrl: './philosophy.html',
  styleUrl: './philosophy.scss',
})
export class Philosophy {
  private locale = inject(LOCALE_ID);
  private destroyRef = inject(DestroyRef);
  private el = inject(ElementRef);

  sectionRef = viewChild<ElementRef>('section');

  principles = PHILOSOPHY.map((p) => ({
    number: p.number,
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
