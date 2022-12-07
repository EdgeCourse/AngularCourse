import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnDirective } from './btn.directive';
import { NotDirective } from './not.directive';


@NgModule({
  declarations: [
    AppComponent,
    BtnDirective,
	NotDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
