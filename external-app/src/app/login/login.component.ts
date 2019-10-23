import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials';
import { Employee } from '../models/employee';
import { AuthService } from '../services/auth.service';
import { EmployeeDataService } from '../services/emp.data.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private readonly authService: AuthService;
  private readonly router: Router;
  private readonly employeeDataService: EmployeeDataService;
  public credentials : Credentials;
  public employee : Employee;

  constructor(authService: AuthService, router: Router, employeeDataService: EmployeeDataService) {
    this.authService = authService;
    this.router = router;
    this.employeeDataService = employeeDataService;
   }

  ngOnInit() {
    this.credentials = new Credentials();
  }

  public login(credentials: Credentials) : void {
    this.authService.authEmployee(credentials)
    .subscribe(
      (data: Employee) => {this.employee = data;
      if(this.employee) {
        this.router.navigate(["home"]);
        this.getEmployeeData(this.employee);
      }},
      (err: any) => console.log(err),
      () => console.log(this.employee)
    );
  }

  private getEmployeeData(employee: Employee) : void {
    this.employeeDataService.getEmpByID(employee.employee_id)
      .subscribe(
        (data: Employee) => this.employee = data[0],
        (err: any) => console.log(err),
        () => console.log(this.employee)
      );
  }


}
