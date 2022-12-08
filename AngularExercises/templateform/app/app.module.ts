import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DealerInventoryComponent } from './dealer-inventory/dealer-inventory.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DealerInventoryComponent,
    PhotoGalleryComponent,
    VehicleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
