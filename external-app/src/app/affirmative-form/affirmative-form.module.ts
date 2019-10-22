import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffirmativeFormComponent } from './affirmative-form.component';
import { HeaderModule } from '../header/header.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AffirmativeFormComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FlexLayoutModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    RouterModule,
  ],
  exports:[AffirmativeFormComponent]
})
export class AffirmativeFormModule { }
