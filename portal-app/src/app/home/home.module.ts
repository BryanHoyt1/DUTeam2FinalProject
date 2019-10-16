import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatTableModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatCheckboxModule} from "@angular/material";
import { HomeComponent } from './home.component';
import {CdkTableModule} from "@angular/cdk/table";
import { LoginModule } from '../login/login.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CdkTableModule,
    MatTableModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    LoginModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
