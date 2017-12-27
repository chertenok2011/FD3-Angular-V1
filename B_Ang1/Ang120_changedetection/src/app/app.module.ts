import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HotelComponent } from './hotel.component';

@NgModule({
  declarations: [
    HotelComponent
  ],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: [HotelComponent]
})
export class AppModule { }
