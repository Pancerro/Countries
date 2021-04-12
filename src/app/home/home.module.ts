import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view/main-view.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { DetailsCountryComponent } from './details-country/details-country.component';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {SharedModule} from '../shared/shared.module';




@NgModule({
  declarations: [MainViewComponent, CountriesListComponent, DetailsCountryComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatProgressSpinnerModule,
    SharedModule
  ]
})
export class HomeModule { }
