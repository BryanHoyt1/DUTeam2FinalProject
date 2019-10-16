import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private readonly router: Router;

  constructor(router: Router) {
    this.router = router;
   }

   public logout() {
     this.router.navigate([""]);
   }
}
