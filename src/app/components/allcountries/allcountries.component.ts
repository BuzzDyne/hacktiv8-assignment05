import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-allcountries',
  templateUrl: './allcountries.component.html',
  styleUrls: ['./allcountries.component.css']
})
export class AllcountriesComponent implements OnInit {
  @Output() goToDetailEvent = new EventEmitter<Country>()

  @Input() data: Country[] = []

  ngOnInit(): void {
    
  }

  goToDetails(c: Country) {
    this.goToDetailEvent.emit(c)
  }

}
