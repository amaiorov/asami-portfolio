import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataManagerService } from '@app/datamanager.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projectTitle;
  currentProject;
  projects;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataManager: DataManagerService
  ) {}

  ngOnInit() {
    this.projectTitle = this.route.snapshot.params['shortTitle'];

    this.dataManager.fetchProjects().subscribe((data) => {
      console.log(data);
      this.projects = data;
      this.currentProject = this.projects.find((item) => {
       return item.shortTitle === this.projectTitle;
     });
     console.log(this.currentProject);
    })
  }

}
