import { Component, Input, OnInit } from '@angular/core';
import { ParkingSlotService } from '../service/parking-slot.service';
import { ParkingSlotData } from '../typings/parking-slot-intf';

@Component({
  selector: 'app-parking-slot',
  templateUrl: './parking-slot.component.html',
  styleUrls: ['./parking-slot.component.scss']
})
export class ParkingSlotComponent implements OnInit {

  @Input()
  parkingSlotData!: ParkingSlotData;

  constructor() { }

  ngOnInit(): void {
    
  }

  getBackgroundColor() {
    if (this.parkingSlotData.allocated) {
      return "text-white bg-danger"
    } else {
      return "text-white bg-success"
    }
  }


}
