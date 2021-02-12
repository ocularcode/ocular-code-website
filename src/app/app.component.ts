import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  es = new Array(Math.ceil(Math.random() * 100 + 50));
  clouds = new Array(Math.ceil(Math.random() * 7) + 3);
  constructor() {
  }
}
