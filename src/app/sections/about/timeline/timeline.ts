import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { TimeLineEntry, TimelineType, TIMELINE_ENTRY } from '../../../data/timeline.data';
@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class Timeline {
  entries = TIMELINE_ENTRY;
  selectedEntry = signal<TimeLineEntry | null>(null);
  scrollContainer = viewChild<ElementRef>('scrollContainer');

  typeColors: Record<TimelineType, string> = {
    training: '#EAB308',
    education: '#8B5CF6',
    employment: '#3B82F6',
    freelance: '#10B981',
  };

  typeLabels: Record<TimelineType, string> = {
    training: 'Ausbildung',
    education: 'Weiterbildung',
    employment: 'Anstellung',
    freelance: 'Freelance',
  };

  typeIcons: Record<TimelineType, string> = {
    training: '🎓',
    education: '📚',
    employment: '💼',
    freelance: '🚀',
  };

  onCardMouseMove(event: MouseEvent, cardEl: HTMLElement): void {
    const rect = cardEl.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * 20;
    const rotateY = (x - 0.5) * -20;
    cardEl.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  }

  onCardMouseLeave(cardEl: HTMLElement): void {
    cardEl.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }

  selectEntry(entry: TimeLineEntry): void {
    this.selectedEntry.set(entry);
  }

  closeDetail(): void {
    this.selectedEntry.set(null);
  }

  scroll(direction: 'left' | 'right'): void {
    const container = this.scrollContainer()?.nativeElement;
    if (!container) return;
    container.scrollBy({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth',
    });
  }
}
