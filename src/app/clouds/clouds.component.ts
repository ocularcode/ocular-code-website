import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clouds',
  templateUrl: './clouds.component.html',
  styleUrls: ['./clouds.component.scss']
})
export class CloudsComponent implements OnInit {
  clouds = new Array(Math.ceil(Math.random() * 3));
  constructor() { }

  ngOnInit(): void {
  }

}
