import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkingSlotComponent } from './parking-slot/parking-slot.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookedSlotsComponent } from './booked-slots/booked-slots.component';
import { AvailableSlotsComponent } from './available-slots/available-slots.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ParkingSlotComponent,
    DashboardComponent,
    BookedSlotsComponent,
    AvailableSlotsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
