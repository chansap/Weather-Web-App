import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PassingDataServService } from '../../Services/passing-data-serv.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() areaCoordinate!:any
  urlSafe!: SafeResourceUrl;
  mapCoord:any

  constructor(public sanitizer: DomSanitizer,private passServ: PassingDataServService) { }

  ngOnInit(): void {
    this.passServ.getOnlyCoor().subscribe(  (coord:any)=>{
      console.log("From MapComp passServ",coord);

      this.mapCoord = coord
      let mainURL = `https://maps.google.com/maps?q=${this.mapCoord.lat},${this.mapCoord.lon}&z=09&output=embed`
      this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(mainURL);
    })

    // console.log("From Map Component 26 --->>",this.mapCoord.lat,this.mapCoord.lon);
    // let mainURL = `https://maps.google.com/maps?q=${this.areaCoordinate.lat},${this.areaCoordinate.lon}&z=09&output=embed`
    // let mainURL = `https://maps.google.com/maps?q=${this.mapCoord.lat},${this.mapCoord.lon}&z=09&output=embed`
    // this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(mainURL);
  }

}
