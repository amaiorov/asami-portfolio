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
    this.activeSlide = slide;
  }

  @HostListener('swipeleft', ['$event']) onSwipeLeft($event) {
    // alert('swipe left')
    if (this.activeSlide > 0) {
      this.goto(this.activeSlide - 1);
    }
    // console.log($event)
  }

  @HostListener('swiperight', ['$event']) onSwipeRight($event) {
    // alert('swipe right')
    if (this.activeSlide < this.totalSlides - 1) {
      this.goto(this.activeSlide + 1);
    }
    // console.log($event)
  }


}
