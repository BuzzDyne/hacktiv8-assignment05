import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() goToDetailEvent = new EventEmitter<Country>()

  @Input() data: Country[] = []
  mostPopulateds: Country[] = []
  largests: Country[] = []


  ngOnInit(): void {
    this.mostPopulateds = this.data.sort(function (a,b) {return b.population - a.population}).slice(0, 3)
    this.largests       = this.data.sort(function (a,b) {return b.area - a.area}).slice(0, 3)
  }

  goToDetails(c: Country) {
    this.goToDetailEvent.emit(c)
  }

}
