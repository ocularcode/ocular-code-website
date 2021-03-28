import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-force',
  templateUrl: './force.component.html',
  styleUrls: ['./force.component.scss']
})
export class ForceComponent implements OnInit, AfterViewInit {
  public width = 100;
  public height = 22;

  private attractionForce = 0.001;
  private trailLength = 3000;
  private velocityFactor = 1;
  private trailWidth = 0.3;
  private yFactor = 0.5;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.draw();
  }

  draw() {
    d3.select('#canvas')
      .attr('viewBox', `${-this.width / 2} ${-this.height / 2} ${this.width} ${this.height}`);

    const particle: any = { domCtx: d3.select('#particle') };
    d3.forceSimulation()
      .alphaDecay(0)
      .velocityDecay(0)
      .nodes([particle])
      .force('centerX', d3.forceX().strength(this.attractionForce))
      .force('centerY', d3.forceY().strength(this.attractionForce))
      .on('tick', () => {
        particle.domCtx
          .datum(particle)
          .attr('cx', (d: any) => d.x)
          .attr('cy', (d: any) => d.y)
      });

    d3.timer(() => {
      d3.select('#trail').append('circle')
        .attr('r', this.trailWidth)
        .attr('cx', particle.x)
        .attr('cy', particle.y)
        .transition().duration(this.trailLength)
        .style('opacity', 0)
        .remove();
    });

    particle.y = -this.height * this.yFactor;
    particle.vx = this.velocityFactor * this.height * Math.sqrt(this.attractionForce);
  }
}