import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() slides: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  @HostListener('swipeleft', ['$event']) onSwipeLeft($event) {
    alert('swipe left')
    // console.log($event)
  }

  @HostListener('swiperight', ['$event']) onSwipeRight($event) {
    alert('swipe right')
    // console.log($event)
  }


}
