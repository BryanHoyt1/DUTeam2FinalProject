import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { HeaderModule } from '../header/header.module';
import {FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatSnackBarModule } from '@angular/material';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FlexLayoutModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
