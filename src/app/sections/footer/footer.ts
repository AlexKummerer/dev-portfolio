import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LangSwitch } from '../../components/lang-switch/lang-switch';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
