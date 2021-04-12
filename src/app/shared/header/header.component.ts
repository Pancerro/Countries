import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {AboutMeComponent} from '../about-me/about-me.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ifBackButton = false;
  constructor(private location: Location,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (this.router.url !== '/') {
          this.ifBackButton = true;
        }
      if (this.router.url === '/') {
        this.ifBackButton = false;
      }
      }
    );
  }
  public back(): void {
    this.location.back();
  }

  public aboutMe(): void {
    this.dialog.open(AboutMeComponent);
  }

}
