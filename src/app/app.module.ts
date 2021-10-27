import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllcountriesComponent } from './components/allcountries/allcountries.component';
import { HomeComponent } from './components/home/home.component';
import { CountrydetailComponent } from './components/countrydetail/countrydetail.component';

@NgModule({
  declarations: [
    AppComponent,
    AllcountriesComponent,
    HomeComponent,
    CountrydetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
