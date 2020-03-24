import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '@app/route-animation';

import { DataManagerService } from '@app/datamanager.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [ slideInAnimation ]
})
export class ContentComponent implements OnInit {

  shortScroll = ['home', 'about', 'contact'];

  constructor(
    private dataManager: DataManagerService,
  ) { }

  ngOnInit() {
  }

  animationEnd(event) {
    // console.log(event);
    console.log(this.dataManager.getCurrentCategory());
    if (this.shortScroll.includes(this.dataManager.getCurrentCategory())) {
      // window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
      // window.scrollTo({top: 801, behavior: 'smooth'});
    }
  }

}
