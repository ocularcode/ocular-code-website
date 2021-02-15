import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.scss']
})
export class CloudComponent implements OnInit {
  top = Math.random() * 75;
  duration = Math.random() * 150 + 30;
  delay = -Math.random() * this.duration;
  height = Math.random() * 150 + 50;
  constructor() { }

  ngOnInit(): void {
  }

}
