import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // @Input() currentCategory;
  @ViewChild('menu') menu: ElementRef;

  isMenuOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.classList.toggle('no-scroll');
    // this.menu.nativeElement.classList.toggle('animate').toggle('animate');
  }

}
