import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  shrinkNav = false;
  constructor() { }

  ngOnInit() { }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if (window.pageYOffset > 74) {
      this.shrinkNav = true;
    } else {
      this.shrinkNav = false;
    }
  }
}
