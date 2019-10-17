import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { User } from '../shared/users';
import { Credentials } from '../shared/credentials';
import { Employee } from '../models/employee';
import { EmployeeDataService } from '../services/emp.data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // private readonly snackBar: MatSnackBar;
  // private readonly authService: AuthService;

  public loggedInUser: User;
  public credentials: Credentials = new Credentials();
  public allEmployees = [];
  // private loginSubscription: Subscription;

  // constructor(snackBar: MatSnackBar, authService: AuthService) {
  //   this.snackBar = snackBar;
  //   this.authService = authService;
  // }

  constructor(private employeeDataService : EmployeeDataService) {
    this.employeeDataService = employeeDataService;
  }

   ngOnInit(): void {
     this.employeeDataService.getAllEmployees()
      .subscribe(
        (data: Employee[]) => this.allEmployees = data,
        (err: any) => console.log(err),
        () => console.log(this.allEmployees)
      );
   }

  // ngOnDestroy(): void {
  //   this.loginSubscription && this.loginSubscription.unsubscribe();
  // }

  public login(): void {
    if (this.credentials.username && this.credentials.password) {
      const user = new User();
      user.username = this.credentials.username;
      this.loggedInUser = user;
    } else {
      // this.snackBar.open("Failed to login user!", undefined, {
      //   duration: 3000,
      //   verticalPosition: "top"});
    };
  }
}
