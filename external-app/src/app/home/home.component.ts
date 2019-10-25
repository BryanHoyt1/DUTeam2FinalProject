import { Component} from '@angular/core';
//import { Employee } from '../models/employee';
import { Employee } from '../models/employee';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
//do we need router on this component?
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  public loggedInEmp$ : Observable<Employee>;
  private readonly authService : AuthService;

  public employee$: Observable<Employee>

  constructor(authService : AuthService) { 
    this.authService = authService;
  }

  ngOnInit() {
    this.employee$ = this.authService.getEmp();
    console.log(this.employee$);
  }
}
