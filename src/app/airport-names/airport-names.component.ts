import { Component, OnInit } from '@angular/core';
import { AirportNames } from '../airportNames';
import { AIRPORTNAMES } from '../mock-airport';


@Component({
  selector: 'app-airport-names',
  templateUrl: './airport-names.component.html',
  styleUrls: ['./airport-names.component.scss']
})
export class AirportNamesComponent implements OnInit {

      AirportNames = AIRPORTNAMES;
selectedAirport: AirportNames;
  constructor() { }

  ngOnInit() {

  }
  onSelect(airportname: AirportNames): void {
      this.selectedAirport = airportname;
      console.log("im here"+airportname);
    }
}
