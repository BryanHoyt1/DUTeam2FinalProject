import { Component, OnDestroy, OnInit} from '@angular/core';
import { User } from "../shared/users";
import { Credentials } from "../shared/credentials";
import {MatSnackBar} from "@angular/material";
import {Subscription} from 'rxjs';
import {AuthService} from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy, OnInit {
  private readonly snackBar: MatSnackBar;
  private readonly authService: AuthService;


  public loggedInUser: User;
  public credentials: Credentials = new Credentials();
  private userSubscription: Subscription;
  private loginSubscription: Subscription;

  constructor(snackBar: MatSnackBar, authService: AuthService) {
    this.snackBar = snackBar;
    this.authService = authService;
   }

  ngOnInit(): void {
    this.userSubscription = this.authService.getUser().subscribe((user: User) => this.loggedInUser = user);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.loginSubscription && this.loginSubscription.unsubscribe();
  }
  
  public login(): void {
    this.loginSubscription = this.authService.login(this.credentials).subscribe(null, (error: string) => {
      this.snackBar.open("Failed to login user!", undefined, {
        duration: 3000,
        verticalPosition: "top"
      });
    });
  }
}


