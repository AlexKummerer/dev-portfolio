import {
  Component,
  DestroyRef,
  ElementRef,
  LOCALE_ID,
  afterNextRender,
  inject,
} from '@angular/core';
import { SERVICES } from '../../data/services.data';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  private locale = inject(LOCALE_ID);
  private destroyRef = inject(DestroyRef);
  private el = inject(ElementRef);
  services = SERVICES.map((s) => ({
    title: s.title[this.locale as 'de' | 'en'] ?? s.title['de'],
    description: s.description[this.locale as 'de' | 'en'] ?? s.description['de'],
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
