import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';
import { Philosophy } from '../../sections/philosophy/philosophy';
import { Services } from '../../sections/services/services';
import { Approach } from '../../sections/approach/approach';
import { Projects } from '../../sections/projects/projects';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Philosophy, Services, Approach, Projects, Contact],
  templateUrl: './home.html',
})
export class Home {}
