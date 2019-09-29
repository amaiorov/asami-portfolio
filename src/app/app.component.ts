import { Component } from '@angular/core';

import { DataManagerService } from '@app/datamanager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'asami-portfolio';
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
