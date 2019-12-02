import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, ActivationEnd } from '@angular/router';

import { DataManagerService } from '@app/datamanager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'asami-portfolio';
  currentPage;

  constructor(
    private dataManager: DataManagerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof ActivationEnd) {
        if (this.currentPage === 'project' || this.currentPage !== event.snapshot.data.page) {
          window.scrollTo(0, 0);
        }
        this.currentPage = event.snapshot.data.page;
      }
    });
  }

  @HostListener('document:keyup', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
      if (event.key === 'd') {
        document.body.classList.toggle('debug');
      }
    }

}
