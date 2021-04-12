import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from '../../shared/model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http: HttpClient) { }
  public getCountriesByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(environment.urlRegion + region);
  }
  public getCountry(country: string): Observable<Country> {
    return this.http.get<Country>(environment.urlCountry + country);
  }
}
