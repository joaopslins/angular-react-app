import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonListComponent, PersonComponent } from './comp.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
