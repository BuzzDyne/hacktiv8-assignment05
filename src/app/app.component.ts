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
  detailCountry: Country = {
    name: "string",
    capital: "string",
    area: 0,
    population: 0,
    gdp: 0,
    currency: "string",
    flag_url: "string"
  }
  isFromAll: boolean = false

  errorCountry: Country = {
    name: "string",
    capital: "string",
    area: 0,
    population: 0,
    gdp: 0,
    currency: "string",
    flag_url: "string"
  }

  // States
  isHome: boolean   = true
  isAll: boolean    = false
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

  goBack(isFromAll: boolean) {
    isFromAll ? this.goToAll() : this.goToHome()
  }

  homeToDetails(country: Country) {
    let resCountry = this.countries.find(i => i.name === country.name)

    if(resCountry == undefined) {
      this.detailCountry = this.errorCountry
    } else {
      this.detailCountry = resCountry
    }
    this.isFromAll = false

    this.goToDetail()
  }

  allToDetails(country: Country) {
    let resCountry = this.countries.find(i => i.name === country.name)

    if(resCountry == undefined) {
      this.detailCountry = this.errorCountry
    } else {
      this.detailCountry = resCountry
    }
    this.isFromAll = true
    this.goToDetail()
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
        population: 146171015, gdp: 4328000000000, currency: "Russian Ruble",
        flag_url: "https://www.worldometers.info/img/flags/rs-flag.gif"
      },
      {
        name: "China", capital: "Beijing", area: 3287263,
        population: 1411778724, gdp: 26660000000000, currency: "Renminbi",
        flag_url: "https://www.worldometers.info/img/flags/ch-flag.gif"
      },
      {
        name: "India", capital: "New Delhi", area: 3287263,
        population: 1352642280, gdp: 10207000000000, currency: "Indian Rupee",
        flag_url: "https://www.worldometers.info/img/flags/in-flag.gif"
      },
      {
        name: "Indonesia", capital: "Jakarta", area: 1904569,
        population: 270203917, gdp: 3507000000000, currency: "Indonesian Rupiah",
        flag_url: "https://www.worldometers.info/img/flags/id-flag.gif"
      },
      {
        name: "Japan", capital: "Tokyo", area: 1905000,
        population: 125360000, gdp: 5586000000000, currency: "Japanese Yen",
        flag_url: "https://www.worldometers.info/img/flags/ja-flag.gif"
      },
      {
        name: "South Korea", capital: "Seoul", area: 100363,
        population: 51709098, gdp: 2436000000000, currency: "Korean Won",
        flag_url: "https://www.worldometers.info/img/flags/ks-flag.gif"
      },
      {
        name: "Canada", capital: "Ottawa", area: 9984670,
        population: 38246108, gdp: 2027000000000, currency: "Cannadian Dollar",
        flag_url: "https://www.worldometers.info/img/flags/ca-flag.gif"
      },
      {
        name: "United States", capital: "Washington, D.C.", area: 9833520,
        population: 331449281, gdp: 22940000000000, currency: "U.S. Dollar",
        flag_url: "https://www.worldometers.info/img/flags/us-flag.gif"
      },
      {
        name: "Brazil", capital: "Brasília", area: 8515767,
        population: 210147125, gdp: 3328000000000, currency: "Real",
        flag_url: "https://www.worldometers.info/img/flags/br-flag.gif"
      },
      {
        name: "Australia", capital: "Canberra", area: 7692024,
        population: 25887600, gdp: 1427000000000, currency: "Australian Dollar",
        flag_url: "https://www.worldometers.info/img/flags/as-flag.gif"
      },
      {
        name: "United Kingdom", capital: "London", area: 242495,
        population: 67081000, gdp: 3276000000000, currency: "Pound Sterling",
        flag_url: "https://www.worldometers.info/img/flags/uk-flag.gif"
      },
      {
        name: "Brunei", capital: "Bandar Seri Begawan", area: 5765,
        population: 460345, gdp: 36854000000, currency: "Brunei Dollar",
        flag_url: "https://www.worldometers.info/img/flags/bx-flag.gif"
      },
      {
        name: "Croatia", capital: "Zagreb", area: 56594,
        population: 4058165, gdp: 119000000000, currency: "Brunei Dollar",
        flag_url: "https://www.worldometers.info/img/flags/hr-flag.gif"
      },
      {
        name: "Denmark", capital: "Copenhagen", area: 42933,
        population: 5850189, gdp: 299000000000, currency: "Danish Krone",
        flag_url: "https://www.worldometers.info/img/flags/da-flag.gif"
      },
      {
        name: "Egypt", capital: "Cairo", area: 1010408,
        population: 101478581, gdp: 1391000000000, currency: "Egyptian Pound",
        flag_url: "https://www.worldometers.info/img/flags/eg-flag.gif"
      },
      {
        name: "France", capital: "Paris", area: 640679,
        population: 67413000, gdp: 3232000000000, currency: "Euro",
        flag_url: "https://www.worldometers.info/img/flags/fr-flag.gif"
      },
      {
        name: "Germany", capital: "Berlin", area: 357022,
        population: 83190556, gdp: 4743000000000, currency: "Euro",
        flag_url: "https://www.worldometers.info/img/flags/gm-flag.gif"
      },
      {
        name: "Greece", capital: "Athens", area: 131957,
        population: 10718565, gdp: 339668000000, currency: "Euro",
        flag_url: "https://www.worldometers.info/img/flags/gr-flag.gif"
      },
      {
        name: "Ivory Coast", capital: "Yamoussoukro", area: 322463,
        population: 26378274, gdp: 144497000000, currency: "West African CFA Franc",
        flag_url: "https://www.worldometers.info/img/flags/iv-flag.gif"
      },
      {
        name: "Malaysia", capital: "Kuala Lumpur", area: 330803,
        population: 32730000, gdp: 900426000000, currency: "Ringgit",
        flag_url: "https://www.worldometers.info/img/flags/my-flag.gif"
      },
      {
        name: "New Zealand", capital: "Wellington", area: 268021,
        population: 5133680, gdp: 226566000000, currency: "New Zealand Dollar",
        flag_url: "https://www.worldometers.info/img/flags/nz-flag.gif"
      },
      {
        name: "Panama", capital: "Panama City", area: 75417,
        population: 4379039, gdp: 121749000000, currency: "Balboa",
        flag_url: "https://www.worldometers.info/img/flags/pm-flag.gif"
      },
      {
        name: "Philippines", capital: "Manila", area: 300000,
        population: 109035343, gdp: 1000000000000, currency: "Philippine Peso",
        flag_url: "https://www.worldometers.info/img/flags/rp-flag.gif"
      },
    ]
  }

}
