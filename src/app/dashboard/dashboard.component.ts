import { Component, OnInit } from '@angular/core';
import * as lodash from 'lodash';
import { ParkingSlotService } from '../service/parking-slot.service';
import { ParkingSlotData } from '../typings/parking-slot-intf';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  parkingSlots: ParkingSlotData[][] | undefined;

  constructor(private parkingSlotService: ParkingSlotService){
  }

  ngOnInit(): void {
    this.parkingSlotService.getAllSlots().subscribe(it => {
      this.parkingSlots = lodash.chunk(it, 4);
      })
  }
}
