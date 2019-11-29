import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentPage;

  constructor(
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        console.log(this.route.snapshot.paramMap.get('id'));
        this.currentPage = this.route.snapshot.params;
      }
      if (evt instanceof ActivationEnd) {
        console.log(this.route.snapshot.paramMap.get('id'));
        this.currentPage = this.route.snapshot.params;
      }
    })

  }

}
