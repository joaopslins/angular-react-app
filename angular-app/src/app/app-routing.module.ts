import { NotFoundComponent } from './not-found/not-found.component';
import { PersonPageComponent } from './person/person-page/person-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'person', component: PersonPageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'person'
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
