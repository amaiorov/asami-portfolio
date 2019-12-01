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
    component: HomeComponent,
    data: {
      page: 'home'
    }
  },
  {
    path: ':category',
    component: HomeComponent,
    data: {
      page: 'home'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      page: 'about'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      page: 'contact'
    }
  },
  {
    path: 'project/:id',
    component: ProjectComponent,
    data: {
      page: 'project'
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      page: '404'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
