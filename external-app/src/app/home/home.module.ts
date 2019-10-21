import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../header/header.module';
import { BadgeFormModule } from '../badge-form/badge-form.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
    BadgeFormModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
