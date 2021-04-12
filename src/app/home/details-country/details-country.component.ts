import { Component, OnInit } from '@angular/core';
import {CountryService} from '../countryService/country.service';
import {Country} from '../../shared/model/country';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-details-country',
  templateUrl: './details-country.component.html',
  styleUrls: ['./details-country.component.css']
})
export class DetailsCountryComponent implements OnInit {
  public country: Country;
  public loadingCountry = false;
  public error;
  constructor(private countryService: CountryService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    let countryName = '';
    this.route.paramMap.forEach(({params}: Params) => {
      countryName = params.country;
    }).then();
    this.countryService.getCountry(countryName).subscribe((country: Country) => {
    this.country = country[0];
    this.loadingCountry = true;
    }, err => {
      this.error = err;
      this.loadingCountry = true;
    });
  }

}
