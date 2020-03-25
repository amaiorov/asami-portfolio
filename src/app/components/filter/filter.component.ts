import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

import { DataManagerService } from '@app/datamanager.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {

  // @Input() currentCategory;
  projects;
  categories;
  currentCategory;
  subscription;
  routerSubscription;

  constructor(
    private dataManager: DataManagerService,
    private router: Router
  ) {
    this.projects = dataManager.getProjects();
    this.categories = dataManager.getCategories();
    this.subscription = dataManager.currentCategory$.subscribe(data => {
      this.currentCategory = data;
    });
  }

  ngOnInit() {
    // this.currentCategory = this.dataManager.currentCategory;
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof ActivationEnd) {
        // this.currentCategory = this.dataManager.setCurrentCategory(event.snapshot.paramMap.get('category'));
        // console.log('PAGE', event.snapshot.data.page);
        // console.log('CATEGORY', event.snapshot.paramMap.get('category'));
        let page = event.snapshot.data.page;
        let category = event.snapshot.paramMap.get('category');
        if (!category) {
          this.currentCategory = page;
          // // window.setTimeout(() => {
            window.scrollTo({top: 0});
          // // }, 500);
        } else {
          this.currentCategory = this.dataManager.setCurrentCategory(category);
          // window.setTimeout(() => {
          //   // document.querySelector('.filter-wrapper').scrollIntoView();
            window.scrollTo({top: document.querySelector('.filter-wrapper').offsetTop});
          // }, 501);
        }
      }
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }

  setCategory(category?) {
    this.currentCategory = this.dataManager.setCurrentCategory(category);
    this.router.navigate(['', category])
  }
}
