import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent {
  constructor(private router: Router) { }
  public regionTable = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public goToRegion(region: string): void {
    this.router.navigate(['region/' + region]).then();
  }
}
