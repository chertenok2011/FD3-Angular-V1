import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hotel-stars',
  templateUrl: 'hotel-stars.component.html',
  styleUrls: ['hotel-stars.component.css']
})
export class HotelStarsComponent {

  @Input("starsinput")
  private stars:number;

  getStars():number {
    return this.stars;
  }

  ngOnChanges(changes: { [property: string]: SimpleChange }) { 
    this.stars=changes["stars"].currentValue;
  }

}
