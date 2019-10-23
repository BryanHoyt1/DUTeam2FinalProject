import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../services/auth.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-badge-form',
  templateUrl: './badge-form.component.html',
  styleUrls: ['./badge-form.component.css']
})
export class BadgeFormComponent implements OnInit {

  private readonly authService : AuthService;
  
  public empData : any;

  constructor(authService : AuthService) {
    this.authService = authService;
   }

  ngOnInit() {
    this.empData = this.authService.empData;
    console.log(this.empData);
  }

}
