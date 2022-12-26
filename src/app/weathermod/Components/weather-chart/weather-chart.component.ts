import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { PassingDataServService } from '../../Services/passing-data-serv.service';
import { WeatherApiService } from '../../Services/weather-api.service';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrls: ['./weather-chart.component.css']
})
export class WeatherChartComponent implements OnInit {

   gotCoord : any
   lineChartDatafromApi:any = []
   dataWeatherMax:any = []
   dataWeatherMin:any = []
   timeWeather:any = []
   showMapaftrAnotherResult = false

   lineChartDataFake!:Subscription;

  constructor(private passServ: PassingDataServService) { }

   @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  ngOnInit(): void {

    setTimeout(() =>{
      this.lineChartDataFake = this.passServ.getCoor().subscribe(  (res:any) => {
        console.log('The forecast weather report', res);
        this.lineChartDatafromApi = res.list 
        // 

        if(this.showMapaftrAnotherResult == false){
          this.lineChartDatafromApi.map( (obj:any) => {
            this.dataWeatherMax.push(obj.main.temp_max - 273.15)
            this.dataWeatherMin.push(obj.main.temp_min - 273.15)
            this.timeWeather.push(obj.dt_txt.substring(0, obj.dt_txt.length-3))
            this.showMapaftrAnotherResult = true
          })
        }

        if(this.showMapaftrAnotherResult){
          this.dataWeatherMax.splice(0,this.dataWeatherMax.length)
          this.dataWeatherMin.splice(0,this.dataWeatherMin.length)
          this.timeWeather.splice(0, this.timeWeather.length)

          this.lineChartDatafromApi.map( (obj:any) => {
            this.dataWeatherMax.push(obj.main.temp_max - 273.15)
            this.dataWeatherMin.push(obj.main.temp_min - 273.15)
            this.timeWeather.push(obj.dt_txt.substring(0, obj.dt_txt.length-3))
          })
        }
        
        // console.log("Weather Data", this.dataWeatherMax);
        // console.log("Weather data min",this.dataWeatherMin);
        // console.log("Labels",this.timeWeather);
        
        this.chart?.update();
      })
    },1000)
  }


  public lineChartData:any = {
    datasets: [
      {
        data: this.dataWeatherMax,
        label: 'Max Temp °C',
        // backgroundColor: 'rgba(255,0,0,0.6)',
        borderColor: 'rgba(254, 92, 77, 0.8)',
        borderWidth: 1,
        pointBackgroundColor: 'red',
        pointBorderColor: 'rgba(148,159,177,1)',
        pointHoverBackgroundColor: 'green',
        pointHoverBorderColor: 'yellow',
        fill: 'origin',
      },
      {
        data: this.dataWeatherMin,
        label: 'Min Temp °C',
        // backgroundColor: 'rgba(0, 21, 255, 0.8)',
        borderColor: 'rgba(164, 171, 253, 0.8)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(164, 171, 253, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0, 21, 249, 0.8)',
        fill: 'origin',
      }
      
    ],
    labels: this.timeWeather
  }

  public lineChartType: ChartType = 'line';

  // public lineChartOptions: ChartConfiguration['options'] = {
  //   elements: {
  //     line: {
  //       tension: 0.3
  //     }
  //   },
  //   // plugins: {
  //   //   legend: { display: true },
  //   //   annotation: {
  //   //     annotations:[
  //   //     {
  //   //         type: 'line',
  //   //         scaleID: 'x',
  //   //         value: '2022-12-17 12:00:00',
  //   //         borderColor: 'orange',
  //   //         borderWidth: 2,
  //   //         label: {
  //   //           // display: true,
  //   //           position: 'center',
  //   //           color: 'orange',
  //   //           content: 'LineAnno',
  //   //           font: {
  //   //             weight: 'bold'
  //   //           }
  //   //         }
  //   //       }
  //   //      ]
  //   //   }
  //   // }
  // }




}
