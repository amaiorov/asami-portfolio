import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataManagerService } from '@app/datamanager.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects;
  currentProject;
  relatedProjects;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataManager: DataManagerService
  ) {}

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false
    };

    this.projects = this.dataManager.getProjects();
    this.currentProject = this.getProjectByShortTitle(this.route.snapshot.params['shortTitle']);
    this.relatedProjects = this.currentProject.related.map(item => {
      return this.getProjectByShortTitle(item);
    });
    console.log(this.currentProject);
    console.log(this.relatedProjects);
  }

  getProjectByShortTitle(title) {
    return this.projects.find((item) => {
      return item.shortTitle === title;
    });
  }

}
