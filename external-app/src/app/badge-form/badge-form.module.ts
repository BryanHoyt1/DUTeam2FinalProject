import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BadgeFormComponent } from './badge-form.component';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [BadgeFormComponent],
  imports: [
    HeaderModule,
    FlexLayoutModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    RouterModule,

  ],
  exports: [BadgeFormComponent]
})
export class BadgeFormModule { }