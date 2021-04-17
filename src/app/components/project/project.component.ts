import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

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

  getSrc(file, size) {
    const path = file.substr(0, file.lastIndexOf('/'));
    const filename = file.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
    const resized = path + '/resize/' + filename + '-' + size + '.jpg';
    // console.log(resized);
    return resized;
  }

  onLoad() {
    alert('on load')
  }

  onError() {
    alert('on error')
  }

}
