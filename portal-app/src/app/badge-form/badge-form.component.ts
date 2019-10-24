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

  constructor() { }

  ngOnInit() {
  }

  private getBadgeByEmpId(employee : Employee) : void {
    this.badgeService.getBadgeByEmpId(employee.employee_id)
      .subscribe(
        (data: Badge) => this.badge = data[0],
        (err: any) => console.log(err),
        () => console.log(this.badge)
      );
  }

  /* public getOneEmployee(employee: Employee) : void {
    this.employeeDataService.getEmpByID(employee.employee_id)
    .subscribe(
      (data: Employee) => this.employee = data[0],
      (err: any) => console.log(err),
      //(err: any) => alert(err),
      () => console.log(this.employee)
    );
  }  */

}
