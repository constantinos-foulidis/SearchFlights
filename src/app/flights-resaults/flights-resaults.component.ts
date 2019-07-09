import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';


@Component({
  selector: 'app-flights-resaults',
  templateUrl: './flights-resaults.component.html',
  styleUrls: ['./flights-resaults.component.scss']
})
export class FlightsResaultsComponent implements OnInit {
  public Searchflights =[] ;
  constructor(private flightService: FlightsService) { }

  ngOnInit() {
    this.flightService.getFlights().subscribe(data =>this.Searchflights.push(data));
console.log(this.Searchflights);
  }

}
