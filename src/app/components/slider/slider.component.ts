import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() slides: any[] = [];

  @ViewChild('gallery') gallery: ElementRef;

  activeSlide: number;
  totalSlides: number;
  isAnimating = false;

  constructor() { }

  ngOnInit() {
    this.activeSlide = 0;
    this.totalSlides = this.slides.length;
  }

  // transitionEnded($event) {
  //   console.log('transition ended');
  //   this.isAnimating = false;
  //   // this.gallery.nativeElement.removeEventListener('transitionend', this.transitionEnded);
  //   $event.currentTarget.removeEventListener('transitionend', this.transitionEnded);
  // }

  goto(slide) {
    if (this.isAnimating) {
      console.log('ALREADY ANIMATION')
      return false;
    }
    console.log('goto', slide);
    this.isAnimating = true;
    // this.gallery.nativeElement.addEventListener('transitionend', this.transitionEnded);
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

  @HostListener('transitionend', ['$event']) onTransitionEnd($event) {
    if ($event.target !== this.gallery.nativeElement) {
      return false;
    } else {
      console.log('transition ended');
      this.isAnimating = false;
    }
  }


}
