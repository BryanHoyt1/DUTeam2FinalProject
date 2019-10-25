import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from './header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
//import { BadgeFormComponent } from './badge-form/badge-form.component';
import { AffirmativeFormComponent } from './affirmative-form/affirmative-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local.storage.service';

//import { LoginComponent } from './login/login.component';
//import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AffirmativeFormComponent
    //LoginComponent,
    //HomeComponent,
    //BadgeFormComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    HeaderModule,
    HomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
