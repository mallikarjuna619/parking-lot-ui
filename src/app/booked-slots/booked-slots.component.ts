import { Component, OnInit } from '@angular/core';
import * as lodash from 'lodash';
import { ParkingSlotService } from '../service/parking-slot.service';
import { ParkingSlotData } from '../typings/parking-slot-intf';

@Component({
  selector: 'app-booked-slots',
  templateUrl: './booked-slots.component.html',
  styleUrls: ['./booked-slots.component.scss']
})
export class BookedSlotsComponent implements OnInit {

  parkingSlots: ParkingSlotData[][] | undefined;

  constructor(private parkingSlotService: ParkingSlotService){
  }

  ngOnInit(): void {
    this.parkingSlotService.getAllSlots().subscribe(it => {
      this.parkingSlots = lodash.chain(it)
      .filter(['allocated', true]).chunk(4).value();
      })
  }
}
