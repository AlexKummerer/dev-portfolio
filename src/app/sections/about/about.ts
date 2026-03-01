import { Component } from '@angular/core';
import { Timeline } from "./timeline/timeline";

@Component({
  selector: 'app-about',
  imports: [Timeline],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

}
