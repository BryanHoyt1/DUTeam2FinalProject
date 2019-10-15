import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { User } from '../shared/users';
import { Credentials } from '../shared/credentials';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy, OnInit {
  private readonly snackBar: MatSnackBar;
  private readonly authService: AuthService;

  public loggedInUser$: Observable<User>;
  public credentials: Credentials = new Credentials();
  private loginSubscription: Subscription;

  constructor(snackBar: MatSnackBar, authService: AuthService) {
    this.snackBar = snackBar;
    this.authService = authService;
  }

  ngOnInit(): void {
    this.loggedInUser$ = this.authService.getUser();
  }

  ngOnDestroy(): void {
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
