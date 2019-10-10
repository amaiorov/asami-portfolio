import { Component, OnInit, Input } from '@angular/core';

import { DataManagerService } from '@app/datamanager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // @Input() projects;
  projects;
  categories;
  currentCategory;

  constructor(
    private dataManager: DataManagerService
  ) {
    this.projects = dataManager.getProjects();
    this.categories = dataManager.getCategories();
  }

  ngOnInit() {
  }

  setCategory(category?) {
    this.currentCategory = category;
    this.filterProjects(category);
  }

  filterProjects(category) {
    if (!category) {
      this.projects = this.dataManager.getProjects();
    } else {
      this.projects = this.dataManager.getProjects().filter(item => item.category === category);
    }
  }

}
