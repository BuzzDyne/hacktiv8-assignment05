import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-allcountries',
  templateUrl: './allcountries.component.html',
  styleUrls: ['./allcountries.component.css']
})
export class AllcountriesComponent implements OnInit {

  @Input() data: Country[] = []

  ngOnInit(): void {
    
  }

}
