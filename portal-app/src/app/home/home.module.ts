import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatTableModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatCheckboxModule, MatSortModule} from "@angular/material";
import { HomeComponent } from './home.component';
import { CdkTableModule } from "@angular/cdk/table";
import { LoginModule } from '../login/login.module';
import { HeaderModule } from '../header/header.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BadgeFormModule } from '../badge-form/badge-form.module';




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
    LoginModule,
    HeaderModule,
    BrowserAnimationsModule,
    MatSortModule,
    BadgeFormModule,
    FormsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
