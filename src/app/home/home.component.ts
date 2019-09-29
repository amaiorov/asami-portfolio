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

  ) { }

  ngOnInit() {
    this.dataManager.fetchProjects().subscribe((data) => {
      console.log(data);
      this.projects = data;
    })

  }

}
