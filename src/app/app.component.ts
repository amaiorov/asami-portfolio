import { Component, HostListener } from '@angular/core';

import { DataManagerService } from '@app/datamanager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'asami-portfolio';

  constructor(
    private dataManager: DataManagerService
  ) { }

  @HostListener('document:keyup', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
      if (event.key === 'd') {
        document.body.classList.toggle('debug');
      }
    }

}
