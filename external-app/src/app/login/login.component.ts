import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Observable, Subscription } from 'rxjs';
import { Credentials } from '../models/credentials';
import { Employee } from '../models/employee';
import { AuthService } from '../services/auth.service';

//import { EmployeeDataService } from '../services/emp.data.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private readonly authService: AuthService;
  private readonly router: Router;
  private loginSubscription: Subscription;

  public loggedInEmp$ = new Observable<Employee>();
  public credentials : Credentials = new Credentials();
  
  constructor(authService: AuthService, router: Router) {
    this.authService = authService;
    this.router = router;
   }

  ngOnInit() {
    this.loggedInEmp$ = this.authService.getEmp();
  }

  ngOnDestroy() : void {
    this.loginSubscription && this.loginSubscription.unsubscribe();
  }

  public login(): void {
    this.loginSubscription = this.authService.login(this.credentials).subscribe(() => {
      this.router.navigate(["home"]);
    }, (error: string) => {
      console.log(error);
      alert("Failed to login.  Please make sure your username and password are correct.")
    });
  }
}
