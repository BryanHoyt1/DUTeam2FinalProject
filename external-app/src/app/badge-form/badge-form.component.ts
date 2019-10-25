import { Component, OnInit } from '@angular/core';
import { BadgeService } from  '../services/badge.service';
import { Badge } from '../models/badge';
import { Employee } from '../models/employee';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-badge-form',
  templateUrl: './badge-form.component.html',
  styleUrls: ['./badge-form.component.css']
})
export class BadgeFormComponent implements OnInit {

  private readonly badgeService : BadgeService;
  private readonly authService : AuthService;
  public employee$ : Observable<Employee>;
  public badge : Badge;
  public employee : Employee;
  
  //public empData : any;

  constructor(badgeService : BadgeService, authService : AuthService) {
    this.badgeService = badgeService;
    this.authService = authService;
   }

  ngOnInit() {
    
    this.badge = new Badge();
    this.employee = new Employee();
    this.employee$ = this.authService.getEmp();
    console.log(this.employee$);
  }

  public addBadge(newBadge: Badge) : void {

    //TODO: This is the employee_id that makes the badgeform post
    //newBadge.employee_id = 14;

    this.badgeService.addBadgeForm(newBadge)
      .subscribe(
        (data: Badge) => this.badge = data,
        (err : any) => console.log(err),
        () => console.log(this.badge)
      );
  }

}
