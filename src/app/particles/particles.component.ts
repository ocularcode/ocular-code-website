import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss']
})
export class ParticlesComponent implements OnInit {
  es = new Array(Math.ceil(Math.random() * 100 + 50));
  constructor() { }

  ngOnInit(): void {
  }

}
