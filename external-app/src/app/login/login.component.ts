import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials';
import { Employee } from '../models/employee';
import { AuthService } from '../services/auth.service';
import { IdentityService } from '../services/identity.service';
//import { EmployeeDataService } from '../services/emp.data.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private readonly authService: AuthService;
  private readonly router: Router;
  private readonly identityService : IdentityService;
  public credentials : Credentials;
  public employee : Employee;

  constructor(authService: AuthService, router: Router, identityService: IdentityService) {
    this.authService = authService;
    this.router = router;
    this.identityService = identityService;
   }

  ngOnInit() {
    this.credentials = new Credentials();
  }

  public login(credentials: Credentials) : void {
    this.authService.authEmployee(credentials)
    .subscribe(
      (data: Employee) => {this.employee = data;
      if(this.employee) {
        this.identityService.setId('empId', this.employee.employee_id);
        this.router.navigate(["home"]);
      }},
      (err: any) => console.log(err),
      () => console.log(this.employee)
    );
  }
}
