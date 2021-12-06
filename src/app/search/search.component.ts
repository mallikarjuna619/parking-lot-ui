import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as lodash from 'lodash';
import { map, Observable } from 'rxjs';
import { ParkingSlotService } from '../service/parking-slot.service';
import { ParkingSlotData } from '../typings/parking-slot-intf';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  parkingSlot: ParkingSlotData | undefined;
  paramId: string | null ='';

  constructor(private parkingSlotService: ParkingSlotService, private _router: Router, private activatedRoute: ActivatedRoute ){
  }

  ngOnInit(): void {
    this.paramId = this.activatedRoute.snapshot.paramMap.get('regNumber');
    console.log("params"+this.paramId);
    this.parkingSlotService.getAllSlots().subscribe(it => {
      this.parkingSlot = lodash.find(it, ['vehicle.regNumber', this.paramId])
    });
  }

}
