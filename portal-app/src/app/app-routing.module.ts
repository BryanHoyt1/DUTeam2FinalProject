import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AddNewComponent } from './add-new/add-new.component';


const routes: Routes = [
  {
    path: "", 
    pathMatch: "full",
    component: HomeComponent
  }, 
  {
    path: "add-new", 
    component: AddNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
