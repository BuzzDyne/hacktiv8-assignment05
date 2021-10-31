import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AllcountriesComponent } from './components/allcountries/allcountries.component';
import { HomeComponent } from './components/home/home.component';
import { CountrydetailComponent } from './components/countrydetail/countrydetail.component';
import { NumberSuffixPipe } from './number-suffix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AllcountriesComponent,
    HomeComponent,
    CountrydetailComponent,
    NumberSuffixPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
