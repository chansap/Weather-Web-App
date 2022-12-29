import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PassingDataServService } from '../../Services/passing-data-serv.service';
import { WeatherApiService } from '../../Services/weather-api.service';

@Component({
  selector: 'app-first-drop',
  templateUrl: './first-drop.component.html',
  styleUrls: ['./first-drop.component.css']
})
export class FirstDropComponent implements OnInit {
  countriesList:Array<any> = []
  citiesList:Array<any> = []
  cityToggle:Boolean = false;
  loader:Boolean = false;
  currentStat: any;
  nxtDays: Array<any>=[];
  currentDate:any;
  sunsetDate:any;
  sunriseDate:any;
  country!:string
  place!:any
  weatherpicURL:any
  weatherContainer = false

  constructor(private _http:HttpClient, private weatherService: WeatherApiService, private passServ: PassingDataServService) { }

  ngOnInit(): void {
    this.loader = true
    this.weatherService.getCountryNames().subscribe((countries:any) =>{
      this.countriesList = countries.data
      this.countriesList = this.countriesList.sort()
      this.loader = false
      // console.log(this.countriesList);
    })
  }


  saverange(event:any){
    this.loader = true
    console.log(event.value);
    this.country = event.value
    this.cityToggle = true
    this.weatherService.getCities(event.value).subscribe( (cities:any) =>{
      // console.log(cities.data);
      this.citiesList = cities.data
      this.loader = false
    })
  }

  selectedCity(event:any){
    this.loader = true
    
    console.log(event.value);
    this.place = event.value
    this.weatherService.getFullCityWeather(event.value).subscribe( (weatherData:any) =>{
      console.log(weatherData);
      this.loader = false

       this.currentStat = weatherData     //Getting the weather data
       this.weatherpicURL = `http://openweathermap.org/img/wn/${this.currentStat.weather[0].icon}.png`
       this.passServ.setCoord(this.currentStat.coord)


       this.weatherContainer = true
      //  Date

      this.currentDate = this.dateChanger(this.currentStat.dt)
      this.sunriseDate = this.dateChanger(this.currentStat.sys.sunrise)
      this.sunsetDate = this.dateChanger(this.currentStat.sys.sunset)
      
    })
  }

  dateChanger(epochTime:any){
    let milliseconds = epochTime;
      var d = new Date(0); 
      d.setUTCSeconds(milliseconds);
      // console.log("Date ->>",d);
      return d
  }
}


//         let milliseconds = 1670977938;
//         var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
//         d.setUTCSeconds(milliseconds);