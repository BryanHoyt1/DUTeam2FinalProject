import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { AddNewModule } from './add-new/add-new.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { ConfigComponent } from './config/config.component';
import { BadgeFormComponent } from './badge-form/badge-form.component';
import { AffirmativeFormComponent } from './affirmative-form/affirmative-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    BadgeFormComponent,
    AffirmativeFormComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HeaderModule,
    HomeModule,
    AddNewModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
