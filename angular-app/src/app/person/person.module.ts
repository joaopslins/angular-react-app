import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonPageComponent } from './person-page/person-page.component';
import { PersonCardComponent } from './person-card/person-card.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [PersonPageComponent, PersonCardComponent]
})
export class PersonModule { }
