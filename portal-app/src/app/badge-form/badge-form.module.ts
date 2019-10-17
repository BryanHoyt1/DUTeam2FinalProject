import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BadgeFormComponent } from './badge-form.component';


@NgModule({
  declarations: [BadgeFormComponent],
  imports: [
    FlexLayoutModule,
    FormsModule,

  ],
})
export class BadgeFormModule { }
