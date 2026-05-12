import { Component } from '@angular/core';
import { LangSwitch } from '../../components/lang-switch/lang-switch';

@Component({
  selector: 'app-footer',
  imports: [LangSwitch],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
