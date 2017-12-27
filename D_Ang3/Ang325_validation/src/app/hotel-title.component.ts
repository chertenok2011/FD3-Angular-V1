import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hotel-title',
  templateUrl: 'hotel-title.component.html',
  styleUrls: ['hotel-title.component.css']
})
export class HotelTitleComponent {

  @Input("hotel-name")
  private hotelName:string;

  getName():string {
    return this.hotelName;
  }

  // метод получит изменения всех привязанных свойств
  ngOnChanges(changes: { [property: string]: SimpleChange }) { 
    // получаем изменения нужного свойства
    let hotelNameChange:SimpleChange=changes["hotelName"];
    this.hotelName=hotelNameChange.currentValue;
  }

}
