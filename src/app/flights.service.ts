import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Searchflights} from "./flightsResults";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FlightsService {

   private _name:String;
   private _euro: String;
   private _nightsindestinationfrom: String;
   private _nightsindestinationto: String;

   public setName(value: String) {
        this._name = value;
        console.log("im on service"+value);
    }
  public setEuro(value: Number) {
       this._euro = value.toString();
       console.log("im on service"+this._euro.toString());
   }
   public setNightsFrom(value: String) {
        this._nightsindestinationfrom = value;
        console.log("im on service"+value);
    }
    public setNightsTo(value: String) {
         this._nightsindestinationto = value;
         console.log("im on service"+value);
     }
  constructor(private http:HttpClient) { }

  private  url:string='https://api.skypicker.com/flights?fly_from='+this._name+'&price_from=1&price_to='+this._euro+'&sort=price&nights_in_dst_from='+this._nightsindestinationfrom+'&nights_in_dst_to='+this._nightsindestinationto+'&flight_type=round';
private url1:string='https://api.skypicker.com/flights?fly_from=SKG&price_from=1&price_to=100&sort=price&nights_in_dst_from=2&nights_in_dst_to=4&flight_type=round';
  public getFlights():Observable<Searchflights[]>{
   return this.http.get<Searchflights[]>(this.url1) ;

 }
}
