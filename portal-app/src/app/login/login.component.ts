import { Component, OnDestroy, OnInit} from '@angular/core';
import { User } from "../shared/users";
import { Credentials } from "../shared/credentials";
import {MatSnackBar} from "@angular/material";
import {Subscription} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {Router} from "@angular/router";


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
  private readonly router: Router;

  constructor(snackBar: MatSnackBar, authService: AuthService, router: Router) {
    this.snackBar = snackBar;
    this.authService = authService;
    this.router = router;
   }

  ngOnInit(): void {
    this.userSubscription = this.authService.getUser().subscribe((user: User) => this.loggedInUser = user);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.loginSubscription && this.loginSubscription.unsubscribe();
  }
  
  public login(): void {
    if(this.credentials.username && this.credentials.password) {
          this.router.navigate(["home"]);
    } else {
      alert("ERROR: The login credentials are not correct");
    }



    // this.loginSubscription = this.authService.login(this.credentials).subscribe(null, (error: string) => {
    //   this.snackBar.open("Failed to login user!", undefined, {
    //     duration: 3000,
    //     verticalPosition: "top"
    //   });
    // });

  }
}


