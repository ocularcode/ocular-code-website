import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-force',
  templateUrl: './force.component.html',
  styleUrls: ['./force.component.scss']
})
export class ForceComponent implements OnInit, AfterViewInit {
  attractionForce = 0.001;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const width = this.content.nativeElement.offsetWidth;
    const height = this.content.nativeElement.offsetHeight;

    console.log(width);
    console.log(height);
    this.draw(width, height);
  }

  draw(width: number, height: number) {
    d3.select('#canvas')
      .attr('viewBox', `${-width / 2} ${-height / 2} ${width} ${height}`);

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
        .attr('r', 1.5)
        .attr('cx', particle.x)
        .attr('cy', particle.y)
        .transition().duration(3500)
        .style('opacity', 0)
        .remove();
    });

    particle.y = -height / 3;
    particle.vx = 0.55 * height * Math.sqrt(this.attractionForce);
  }

  @ViewChild('content')
  content!: ElementRef;
}