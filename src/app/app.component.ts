import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as lodash from 'lodash';
import { map, Observable } from 'rxjs';
import { ParkingSlotService } from './service/parking-slot.service';
import { ParkingSlotData } from './typings/parking-slot-intf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  regNumber: String = '';
  constructor(private _router: Router, private activatedRoute: ActivatedRoute ){
  }
  searchParkingSlot(){
    console.log("fomr"+this.regNumber);
    this._router.navigate(["/search", {regNumber: this.regNumber}]);
  }
}
