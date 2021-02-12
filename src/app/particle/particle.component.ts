import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-particle',
  templateUrl: './particle.component.html',
  styleUrls: ['./particle.component.scss']
})
export class ParticleComponent implements OnInit {
  randTop = Math.random() * 100
  randLeft = Math.random() * 100
  pulseDuration = Math.random() * 5 + 0.5
  pulseDelay = -Math.random() * this.pulseDuration
  constructor() { }

  ngOnInit(): void {
  }

}
