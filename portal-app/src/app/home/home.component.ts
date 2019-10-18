import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { User } from '../shared/users';
import { Credentials } from '../shared/credentials';
import { SearchParams } from "../models/searchParams";
import { FilterOption } from "../models/filterOption";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // private readonly snackBar: MatSnackBar;
  // private readonly authService: AuthService;
  public searchFor: string;
  public searchBy: string;
  public sortAsc: boolean;

  public loggedInUser: User;
  public credentials: Credentials = new Credentials();
  // private loginSubscription: Subscription;

  // constructor(snackBar: MatSnackBar, authService: AuthService) {
  //   this.snackBar = snackBar;
  //   this.authService = authService;
  // }

  // ngOnInit(): void {
  //   this.loggedInUser$ = this.authService.getUser();
  // }

  public async search(): Promise<void> {
    const searchParams: SearchParams = new SearchParams();
    searchParams.filterProp = this.searchBy;
    searchParams.filterText = this.searchFor;
    searchParams.sortAsc = this.sortAsc;

    //this.users = await this.userService.getUsers(searchParams);
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
