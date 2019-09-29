import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { DataManagerService } from '@app/datamanager.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

export function dataManagerFactory(provider: DataManagerService) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectComponent,
    PageNotFoundComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    DataManagerService,
    { provide: APP_INITIALIZER, useFactory: dataManagerFactory, deps: [DataManagerService], multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
