import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainViewComponent} from './home/main-view/main-view.component';
import {CountriesListComponent} from './home/countries-list/countries-list.component';
import {DetailsCountryComponent} from './home/details-country/details-country.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: MainViewComponent },
  { path: 'region/:region', component: CountriesListComponent},
  { path: 'region/:region/details-country/:country', component: DetailsCountryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
