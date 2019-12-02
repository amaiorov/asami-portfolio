import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() slides: any[] = [];

  activeSlide: number;
  totalSlides: number;

  constructor() { }

  ngOnInit() {
    this.activeSlide = 0;
    this.totalSlides = this.slides.length;
  }

  goto(slide) {
    console.log('goto', slide);
    this.activeSlide = slide;
  }

  @HostListener('swipeleft', ['$event']) onSwipeLeft($event) {
    console.log('swipe left')
    if (this.activeSlide < this.totalSlides - 1) {
      this.goto(this.activeSlide + 1);
    }
    // console.log($event)
  }

  @HostListener('swiperight', ['$event']) onSwipeRight($event) {
    console.log('swipe right')
    if (this.activeSlide > 0) {
      this.goto(this.activeSlide - 1);
    }
    // console.log($event)
  }


}
