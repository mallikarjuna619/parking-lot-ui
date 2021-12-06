import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableSlotsComponent } from './available-slots/available-slots.component';
import { BookedSlotsComponent } from './booked-slots/booked-slots.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'booked-slots', component: BookedSlotsComponent },
  { path: 'free-slots', component: AvailableSlotsComponent },
  { path: 'search', component: SearchComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
