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
    MatSortModule,
    LoginModule,
    HeaderModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
