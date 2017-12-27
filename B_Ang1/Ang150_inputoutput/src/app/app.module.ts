import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HotelComponent } from './hotel.component';

@NgModule({
  declarations: [
    HotelComponent
  ],
  imports: [ BrowserModule, FormsModule ],
  providers: [],
  bootstrap: [HotelComponent]
})

export class AppModule { }
