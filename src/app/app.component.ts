import { Component, OnInit } from '@angular/core';
import { Country } from './models/Country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'country-app';
  countries: Country[] = []

  // States
  isHome: boolean   = false
  isAll: boolean    = true
  isDetail: boolean = false

  goToHome() {
    this.isHome   = true
    this.isAll    = false
    this.isDetail = false
  }

  goToAll() {
    this.isHome   = false
    this.isAll    = true
    this.isDetail = false
  }

  goToDetail() {
    this.isHome   = false
    this.isAll    = false
    this.isDetail = true
  }

  ngOnInit(): void {
    this.countries = [
      {
        name: "Russia", capital: "Moscow", area: 13129142,
        population: 146171015, gdp: 4328000000000, currency: "Russian Ruble"
      },
      {
        name: "China", capital: "Beijing", area: 3287263,
        population: 1411778724, gdp: 26660000000000, currency: "Renminbi"
      },
      {
        name: "India", capital: "New Delhi", area: 3287263,
        population: 1352642280, gdp: 10207000000000, currency: "Indian Rupee"
      },
      {
        name: "Indonesia", capital: "Jakarta", area: 1904569,
        population: 270203917, gdp: 3507000000000, currency: "Indonesian Rupiah"
      },
      {
        name: "Japan", capital: "Tokyo", area: 1905000,
        population: 125360000, gdp: 5586000000000, currency: "Japanese Yen"
      },
      {
        name: "South Korea", capital: "Seoul", area: 100363,
        population: 51709098, gdp: 2436000000000, currency: "Korean Won"
      },
      {
        name: "Canada", capital: "Ottawa", area: 9984670,
        population: 38246108, gdp: 2027000000000, currency: "Cannadian Dollar"
      },
      {
        name: "United States", capital: "Washington, D.C.", area: 9833520,
        population: 331449281, gdp: 22940000000000, currency: "U.S. Dollar"
      },
      {
        name: "Brazil", capital: "Brasília", area: 8515767,
        population: 210147125, gdp: 3328000000000, currency: "Real"
      },
      {
        name: "Australia", capital: "Canberra", area: 7692024,
        population: 25887600, gdp: 1427000000000, currency: "Australian Dollar"
      },
      {
        name: "England", capital: "London", area: 130279,
        population: 56286961, gdp: 19000000000, currency: "Pound Sterling"
      }
    ]
  }

}
