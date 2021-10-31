import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-countrydetail',
  templateUrl: './countrydetail.component.html',
  styleUrls: ['./countrydetail.component.css']
})
export class CountrydetailComponent implements OnInit {

  @Input() data: Country = {
    name: "string",
    capital: "string",
    area: 0,
    population: 0,
    gdp: 0,
    currency: "string",
    flag_url: "string"
  }

  @Input() isFromAll: boolean = false

  @Output() goBackEventHandler = new EventEmitter<boolean>()



  ngOnInit(): void {
    console.log(this.data);
    
  }

  goBack() {
    this.goBackEventHandler.emit(this.isFromAll)
  }

}
