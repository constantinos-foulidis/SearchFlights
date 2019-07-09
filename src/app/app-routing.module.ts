import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsResaultsComponent } from './flights-resaults/flights-resaults.component';
import { AirportNamesComponent } from './airport-names/airport-names.component';

const routes: Routes = [
   {path: '', redirectTo: '/flights', pathMatch: 'full'},

  { path: 'flights', component:  AirportNamesComponent },
  { path: 'flightsResults', component: FlightsResaultsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
