import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BadgeFormComponent } from './badge-form/badge-form.component';


const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "home", 
    // pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "badgeform",
    component: BadgeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
