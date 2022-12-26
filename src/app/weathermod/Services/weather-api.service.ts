import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { allCities, allCountry, appid, call_5days_foreCast, weatherDetailsOfCity } from '../Constants/Constants';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http : HttpClient) { }

  getCountryNames(){
    return this.http.get<any>(allCountry)
  }

  getCities(countryName:any){
    let countryObj = {
      "country": countryName
    }
    return this.http.post<any>(allCities, countryObj)
  }

  getFullCityWeather(city:String){
    let url = weatherDetailsOfCity + city + "&appid=" + appid
    return this.http.get<any>(url)
  }

  get5DaysForecast(coord:any){
    let url = call_5days_foreCast + "lat=" + coord.lat + "&lon=" + coord.lon+ "&appid=" + appid
    return this.http.get<any>(url)
  }
}
