import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.scss']
})
export class InProgressComponent implements OnInit {

  public delay = -Math.random() * 3;
  public duration = Math.random() + .5;

  constructor() { }

  ngOnInit(): void {
  }

}
