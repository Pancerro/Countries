import { Component, OnInit } from '@angular/core';
import {CountryService} from '../countryService/country.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Country} from '../../shared/model/country';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
  public region: string;
  public loadingCountryInRegion = false;
  public error;
  public countryInRegion: Country[];
  constructor(private countryService: CountryService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.forEach(({params}: Params) => {
      this.region = params.region;
    }).then(() => {} );
    this.countryService.getCountriesByRegion(this.region).subscribe((country: Country[]) => {
      this.countryInRegion = country;
      this.loadingCountryInRegion = true;
    }, err => {
      this.error = err;
      this.loadingCountryInRegion = true;
    });

  }
  public getDetails(country: Country): void {
    this.router.navigate(['region/' + this.region + '/details-country/' + country.name]).then();
  }

}
