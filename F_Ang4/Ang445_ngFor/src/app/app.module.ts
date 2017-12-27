import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HotelComponent } from './hotel.component';
import { HotelTitleComponent } from './hotel-title.component';
import { HotelStarsComponent } from './hotel-stars.component';
import { HotelRoomComponent } from './hotel-room.component';

@NgModule({
  declarations: [
    HotelComponent, HotelTitleComponent, 
    HotelStarsComponent, HotelRoomComponent
  ],
  imports: [ BrowserModule, FormsModule ],
  providers: [],
  bootstrap: [HotelComponent]
})
export class AppModule { }
