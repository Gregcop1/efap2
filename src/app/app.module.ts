import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { routes } from '../routes/routes';
import {
  Single1Component,
  Single2Component,
  Single3Component,
  Single4Component,
  Single5Component,
  Single6Component,
  Single7Component,
  Single8Component,
  Single10Component,
  Single11Component,
  Single12Component,
  Single13Component,
  Single14Component,
  Single15Component,
  Single16Component,
} from './single';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    Single1Component,
    Single2Component,
    Single3Component,
    Single4Component,
    Single5Component,
    Single6Component,
    Single7Component,
    Single8Component,
    Single10Component,
    Single11Component,
    Single12Component,
    Single13Component,
    Single14Component,
    Single15Component,
    Single16Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
