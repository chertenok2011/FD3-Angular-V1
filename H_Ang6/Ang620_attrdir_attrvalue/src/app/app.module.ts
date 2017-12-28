import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HotelComponent } from './hotel.component';
import { HotelTitleComponent } from './hotel-title.component';
import { RainbowDirective } from './rainbow.attr.directive';

@NgModule({
  declarations: [
    HotelComponent, HotelTitleComponent, RainbowDirective
  ],
  imports: [ BrowserModule, FormsModule ],
  providers: [ ],
  bootstrap: [HotelComponent]
})
export class AppModule { }
