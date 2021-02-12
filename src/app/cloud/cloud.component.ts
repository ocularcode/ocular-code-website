import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.scss']
})
export class CloudComponent implements OnInit {
  randTop = Math.random() * 100;
  duration = Math.random() * 200 + 20;
  delay = -Math.random()*this.duration;
  constructor() { }

  ngOnInit(): void {
  }

}
