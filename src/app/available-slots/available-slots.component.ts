import { Component, OnInit } from '@angular/core';
import * as lodash from 'lodash';
import { ParkingSlotService } from '../service/parking-slot.service';
import { ParkingSlotData } from '../typings/parking-slot-intf';

@Component({
  selector: 'app-available-slots',
  templateUrl: './available-slots.component.html',
  styleUrls: ['./available-slots.component.scss']
})
export class AvailableSlotsComponent implements OnInit {

 
  parkingSlots: ParkingSlotData[][] | undefined;

  constructor(private parkingSlotService: ParkingSlotService){
  }

  ngOnInit(): void {
    this.parkingSlotService.getAllSlots().subscribe(it => {
      this.parkingSlots = lodash.chain(it)
      .filter(['allocated', false]).chunk(4).value();
      })
  }
}
