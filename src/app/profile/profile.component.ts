import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public isOpen = false;

  constructor(public el: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPos = this.el.nativeElement.offsetTop;
    const scrollPos = window.pageYOffset;
    const screenHeight = window.innerHeight;
    const triggerPoint = scrollPos - screenHeight * 0.5

    console.log(triggerPoint, componentPos);

    if (triggerPoint >= componentPos) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }

}
