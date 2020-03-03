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

}
