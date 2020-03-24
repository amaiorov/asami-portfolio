import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '@app/route-animation';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [ slideInAnimation ]
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  animationStart(event) {
    console.log('animaiton start');
    document.querySelector('app-footer').classList.add('hidden');
  }

  animationDone(event) {
    console.log('animaiton done');
    document.querySelector('app-footer').classList.remove('hidden');
  }

}
