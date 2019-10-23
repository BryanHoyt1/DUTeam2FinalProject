import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials';
import { Employee } from '../models/employee';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private readonly authService: AuthService;
  public credentials : Credentials;
  public employee : Employee;

  constructor(authService: AuthService) {
    this.authService = authService;
   }

  ngOnInit() {
    this.credentials = new Credentials();
  }

  private login(credentials: Credentials) : void {
    this.authService.authEmployee(credentials)
    .subscribe(
      (data: Employee) => this.employee = data,
      (err: any) => console.log(err),
      () => console.log(this.employee)
    );
  }


}
