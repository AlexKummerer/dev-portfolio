import { Component, inject, LOCALE_ID } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { Skills } from './sections/skills/skills';
import { About } from './sections/about/about';
import { Projects } from './sections/projects/projects';
import { Contact } from './sections/contact/contact';
import { Footer } from './sections/footer/footer';

const BASE_URL = 'https://alexkummerer.de';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Skills, About, Projects, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor() {
    const doc = inject(DOCUMENT);
    [
      { lang: 'de', path: '/de/' },
      { lang: 'en', path: '/en/' },
      { lang: 'x-default', path: '/de/' },
    ].forEach(({ lang, path }) => {
      const link = doc.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang);
      link.setAttribute('href', `${BASE_URL}${path}`);
      doc.head.appendChild(link);
    });
  }
}
