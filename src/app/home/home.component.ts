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

  constructor(
    private dataManager: DataManagerService
  ) {
    this.projects = dataManager.getProjects();
  }

  ngOnInit() {
    console.log(this.projects);
    // this.projects = this.dataManager.projects.subscribe((data) => {
    //   alert('got data')
    // });
    // this.dataManager.fetchProjects().subscribe((data) => {
    //   console.log(data);
    //   this.projects = data;
    // })

  }

}
