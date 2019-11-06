import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@app/components/home/home.component';
import { AboutComponent } from '@app/components/about/about.component';
import { ContactComponent } from '@app/components/contact/contact.component';
import { ProjectComponent } from '@app/components/project/project.component';
import { PageNotFoundComponent } from '@app/components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'project/:id',
    component: ProjectComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
