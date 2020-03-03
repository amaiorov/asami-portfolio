import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';

import { AppRoutingModule } from '@app/app-routing.module';
import { DataManagerService } from '@app/datamanager.service';
import { AppComponent } from '@app/app.component';
import { ContentComponent } from '@app/components/content.component';
import { HomeComponent } from '@app/components/home/home.component';
import { AboutComponent } from '@app/components/about/about.component';
import { ContactComponent } from '@app/components/contact/contact.component';
import { ProjectComponent } from '@app/components/project/project.component';
import { PageNotFoundComponent } from '@app/components/pagenotfound/pagenotfound.component';
import { NavComponent } from '@app/components/nav/nav.component';
import { FilterComponent } from '@app/components/filter/filter.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { SliderComponent } from '@app/components/slider/slider.component';

export function dataManagerFactory(provider: DataManagerService) {
  return () => provider.load();
}

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    'pinch': { enable: false },
    'rotate': { enable: false }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectComponent,
    PageNotFoundComponent,
    NavComponent,
    FilterComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    DataManagerService,
    {
      provide: APP_INITIALIZER,
      useFactory: dataManagerFactory,
      deps: [DataManagerService], multi: true
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
