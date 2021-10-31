import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() goToDetailEvent = new EventEmitter<Country>()

  @Input() data       : Country[] = []
  mostPopulateds      : Country[] = []
  largests            : Country[] = []
  interactiveCountries: Country[] = []

  opts_props = ["Area", "Population", "GDP"]
  opts_order = ["Highest", "Lowest"]
  opts_count = [3, 5, 10, 20, 50]

  selectedProp: string = this.opts_props[2]
  selectedOrder: string = this.opts_order[0]
  selectedCount: number = this.opts_count[0]

  onFilterChange() {
    console.log(this.selectedProp, this.selectedOrder);
    this.refreshInteractiveCountry()
  }

  ngOnInit(): void {
    this.mostPopulateds = this.data.sort(function (a,b) {return b.population - a.population}).slice(0, 3)
    this.largests       = this.data.sort(function (a,b) {return b.area - a.area}).slice(0, 3)
    this.refreshInteractiveCountry()
  }

  refreshInteractiveCountry() {
    switch (this.selectedProp) {
      case this.opts_props[0]:
        if (this.selectedOrder == this.opts_order[0]) {
          this.interactiveCountries = this.data.sort(function (a,b) {return b.area - a.area}).slice(0, this.selectedCount)
        } else {
          this.interactiveCountries = this.data.sort(function (a,b) {return a.area - b.area}).slice(0, this.selectedCount)
        }
        break;

      case this.opts_props[1]:
        if (this.selectedOrder == this.opts_order[0]) {
          this.interactiveCountries = this.data.sort(function (a,b) {return b.population - a.population}).slice(0, this.selectedCount)
        } else {
          this.interactiveCountries = this.data.sort(function (a,b) {return a.population - b.population}).slice(0, this.selectedCount)
        }
        break;

      case this.opts_props[2]:
        if (this.selectedOrder == this.opts_order[0]) {
          this.interactiveCountries = this.data.sort(function (a,b) {return b.gdp - a.gdp}).slice(0, this.selectedCount)
        } else {
          this.interactiveCountries = this.data.sort(function (a,b) {return a.gdp - b.gdp}).slice(0, this.selectedCount)
        }
        break;
    
      default:
        break;
    }
  }

  goToDetails(c: Country) {
    this.goToDetailEvent.emit(c)
  }

}
