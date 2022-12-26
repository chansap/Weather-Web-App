import { Component, OnInit } from '@angular/core';
import { PassingDataServService } from '../../Services/passing-data-serv.service';

@Component({
  selector: 'app-accord-forecast',
  templateUrl: './accord-forecast.component.html',
  styleUrls: ['./accord-forecast.component.css']
})
export class AccordForecastComponent implements OnInit {

  p:any
  panelOpenState = false;
  forecastDataArray:any = []

  constructor(private passServ: PassingDataServService) { }

  ngOnInit(): void {

    setTimeout(() =>{
    this.passServ.getCoor().subscribe(  (data:any) => {
      console.log("the Data from accor -->>" , data);
      this.forecastDataArray = data.list
    })
  },1000)
  }


  StringCalc(dateText:any){
    return dateText.dt_txt.substring(0, dateText.dt_txt.length-3)
  }

}
