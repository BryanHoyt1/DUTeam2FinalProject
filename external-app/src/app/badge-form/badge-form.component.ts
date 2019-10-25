import { Component, OnInit } from '@angular/core';
import { BadgeService } from  '../services/badge.service';
import { Badge } from '../models/badge';
import { Employee } from '../models/employee';
import { IdentityService } from '../services/identity.service';

@Component({
  selector: 'app-badge-form',
  templateUrl: './badge-form.component.html',
  styleUrls: ['./badge-form.component.css']
})
export class BadgeFormComponent implements OnInit {

  private readonly badgeService : BadgeService;
  private readonly identityService : IdentityService;
  public badge : Badge;
  public employee : Employee;
  currentId : any;
  
  //public empData : any;

  constructor(badgeService : BadgeService, identityService: IdentityService) {
    this.badgeService = badgeService;
    this.identityService = identityService;
   }

  ngOnInit() {
    
    this.badge = new Badge();
    this.employee = new Employee();
    this.currentId = this.identityService.getId();
    console.log(this.currentId);
  }

  public addBadge(newBadge: Badge) : void {
    newBadge.employee_id = 14;

    this.badgeService.addBadgeForm(newBadge)
      .subscribe(
        (data: Badge) => this.badge = data,
        (err : any) => console.log(err),
        () => console.log(this.badge)
      );
  }

}
