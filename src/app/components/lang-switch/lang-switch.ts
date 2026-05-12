import { Component, inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-lang-switch',
  imports: [],
  templateUrl: './lang-switch.html',
  styleUrl: './lang-switch.scss',
})
export class LangSwitch {
  readonly currentLocale = inject(LOCALE_ID);
}
