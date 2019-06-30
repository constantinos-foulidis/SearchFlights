import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FlightsService {
   private _euro: Number;
   private _nightsindestinationfrom: String;
   private _nightsindestinationto: String;

   public setName(value: String) {
        this._nightsindestinationfrom = value;
        console.log("im on service"+value);
    }
  public setEuro(value: Number) {
       this._euro = value;
       console.log("im on service"+this._euro.toString());
   }
   public setNightsFrom(value: String) {
        this._nightsindestinationfrom = value;
        console.log("im on service"+value);
    }
    public setNightsTo(value: String) {
         this._nightsindestinationto = value;
     }
  constructor(private http:HttpClient) { }
}
