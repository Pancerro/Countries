import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { NoDataPipe } from './pipe/no-data.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    NoDataPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NoDataPipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule

  ]
})
export class SharedModule { }
