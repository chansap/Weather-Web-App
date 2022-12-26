import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { tap, mergeMap } from 'rxjs/operators'
import { WeatherApiService } from './weather-api.service';

@Injectable({
  providedIn: 'root'
})
export class PassingDataServService {

  constructor(private weatherService: WeatherApiService) { }

  coord = new BehaviorSubject('')

  setCoord(setCoord:any){
    this.coord.next(setCoord)
  }

  getCoor(){
    return this.coord.asObservable().pipe(
      // tap( (data:any) => console.log("In passing Serv",data)),
      mergeMap( (data:any) => this.weatherService.get5DaysForecast(data))
    )
  }
}
