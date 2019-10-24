import { Component, OnInit } from '@angular/core';
import { BadgeService } from  '../services/badge.service';
import { Badge } from '../models/badge';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-badge-form',
  templateUrl: './badge-form.component.html',
  styleUrls: ['./badge-form.component.css']
})
export class BadgeFormComponent implements OnInit {

  private readonly badgeService : BadgeService;
  public badge : Badge;
  public employee : Employee;
  
  //public empData : any;

  constructor(badgeService : BadgeService) {
    this.badgeService = badgeService;
   }

  ngOnInit() {
    this.badge = new Badge();
    this.employee = new Employee();
  }

  public addBadge(newBadge: Badge) : void {
    newBadge.employee_id = 13;
    /* newBadge.plate_num = "npe879";
    newBadge.veh_color = "red";
    newBadge.veh_make = "Ford";
    newBadge.veh_model = "Escort"; */

    this.badgeService.addBadgeForm(newBadge)
      .subscribe(
        (data: Badge) => this.badge = data,
        (err : any) => console.log(err),
        () => console.log(this.badge)
      );
  }

}
