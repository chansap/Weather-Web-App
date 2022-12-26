import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainframeComponent } from './Components/mainframe/mainframe.component';
import { HttpClientModule } from '@angular/common/http';
import { FirstDropComponent } from './Components/first-drop/first-drop.component';
import { WeatherChartComponent } from './Components/weather-chart/weather-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { AccordForecastComponent } from './Components/accord-forecast/accord-forecast.component'
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxPaginationModule } from 'ngx-pagination';
import { DateShortnerPipe } from './Pipes/date-shortner.pipe';

@NgModule({
  declarations: [
    MainframeComponent,
    FirstDropComponent,
    WeatherChartComponent,
    AccordForecastComponent,
    DateShortnerPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgChartsModule,
    MatExpansionModule,
    NgxPaginationModule,
  ],
  exports: [
    MainframeComponent
  ]
})
export class WeathermodModule { }
