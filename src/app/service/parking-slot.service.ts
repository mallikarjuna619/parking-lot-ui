import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { ParkingSlotData } from "../typings/parking-slot-intf";

@Injectable({ providedIn: 'root' })
export class ParkingSlotService {

   constructor(private httpClient: HttpClient) { }
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
    public getAllSlots(): Observable<ParkingSlotData[]>{
     return this.httpClient.get<ParkingSlotData[]>("/parking-lot/find-all-slots")
    }

}
