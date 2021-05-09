import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public open = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.open = !this.open;
  }

}
