import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setCategory(category?) {
    // this.currentCategory = this.dataManager.setCurrentCategory(category);
    this.router.navigate(['', category])

  }
}
