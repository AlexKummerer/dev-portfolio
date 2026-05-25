import { Component, ElementRef, LOCALE_ID, inject, signal, viewChild } from '@angular/core';
import { TimeLineEntry, TimelineType, TIMELINE_ENTRY } from '../../../data/timeline.data';

export interface ResolvedTimelineEntry {
  period: string;
  title: string;
  company: string;
  type: TimelineType;
  current: boolean;
  techStack?: string[];
  description?: string;
  companyUrl?: string;
}

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class Timeline {
  private locale = inject(LOCALE_ID);

  entries: ResolvedTimelineEntry[] = TIMELINE_ENTRY.map((e) => this.resolve(e));
  selectedEntry = signal<ResolvedTimelineEntry | null>(null);
  scrollContainer = viewChild<ElementRef>('scrollContainer');

  typeColors: Record<TimelineType, string> = {
    training: '#EAB308',
    education: '#8B5CF6',
    employment: '#3B82F6',
    freelance: '#10B981',
  };

  typeLabels: Record<TimelineType, { de: string; en: string }> = {
    training: { de: 'Ausbildung', en: 'Apprenticeship' },
    education: { de: 'Weiterbildung', en: 'Education' },
    employment: { de: 'Anstellung', en: 'Employment' },
    freelance: { de: 'Freelance', en: 'Freelance' },
  };

  typeIcons: Record<TimelineType, string> = {
    training: '🎓',
    education: '📚',
    employment: '💼',
    freelance: '🚀',
  };

  typeLabel(type: TimelineType): string {
    const lang = (this.locale as 'de' | 'en') ?? 'de';
    return this.typeLabels[type][lang] ?? this.typeLabels[type].de;
  }

  private resolve(e: TimeLineEntry): ResolvedTimelineEntry {
    const lang = (this.locale as 'de' | 'en') ?? 'de';
    return {
      period: e.period,
      title: e.title[lang] ?? e.title.de,
      company: e.company,
      type: e.type,
      current: e.current,
      techStack: e.techStack,
      description: e.description ? e.description[lang] ?? e.description.de : undefined,
      companyUrl: e.companyUrl,
    };
  }

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

  selectEntry(entry: ResolvedTimelineEntry): void {
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
