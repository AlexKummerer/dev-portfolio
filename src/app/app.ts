import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { Skills } from './sections/skills/skills';
import { About } from './sections/about/about';
import { Projects } from './sections/projects/projects';
import { Contact } from './sections/contact/contact';
import { Footer } from './sections/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Skills, About, Projects, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
