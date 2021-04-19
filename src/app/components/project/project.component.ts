import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { DataManagerService } from '@app/datamanager.service';
import { getSrc } from '@app/util';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects;
  currentProject;
  relatedProjects;
  getSrc = getSrc;

  constructor(
    private dataManager: DataManagerService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit() {
    this.projects = this.dataManager.getProjects();
    this.currentProject = this.getProjectById(this.route.snapshot.params['id']);
    this.title.setTitle(`${this.currentProject.shortTitle} - Projects - ${this.dataManager.mainTitle}`);
    if (!this.currentProject) {
      this.router.navigate(['not-found'], {replaceUrl: true});
      return;
    }
    this.relatedProjects = this.currentProject.related.map(item => {
      let project = this.getProjectById(item);
      if (!project) {
        console.error(`project "${item}" not found`);
      }
      return project || false;
    });
  }

  getProjectById(id) {
    return this.projects.find((item) => {
      return item.id === id;
    });
  }

  onLoad() {
    alert('on load')
  }

  onError() {
    alert('on error')
  }

}
