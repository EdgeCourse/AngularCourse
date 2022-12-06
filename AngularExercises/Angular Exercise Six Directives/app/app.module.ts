import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BookInventoryComponent } from './book-inventory/book-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    BookInventoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
