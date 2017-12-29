import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HotelComponent } from './hotel.component';
import { HotelTitleComponent } from './hotel-title.component';
import { LikesCounterComponent } from './likes-counter.component';
import { LikesButtonsComponent } from './likes-buttons.component';
import { LikeEventsService } from './like-events.service';

@NgModule({
  declarations: [
    HotelComponent, HotelTitleComponent, 
    LikesCounterComponent, LikesButtonsComponent
  ],
  imports: [ BrowserModule, FormsModule ],
  providers: [ LikeEventsService ],
  bootstrap: [HotelComponent]
})
export class AppModule { }
