import { Component, OnInit } from '@angular/core';
import { BadgeService } from  '../services/badge.service';
import { EmployeeDataService } from '../services/emp.data.service';
import { Badge } from '../models/badge';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-badge-form',
  templateUrl: './badge-form.component.html',
  styleUrls: ['./badge-form.component.css']
})
export class BadgeFormComponent implements OnInit {

  private readonly badgeService : BadgeService;
  private readonly employeeDataService : EmployeeDataService;
  public badge : Badge;
  public employee : Employee;
  public employee_id : number = 13;

  constructor(badgeService: BadgeService, employeeDataService : EmployeeDataService) {
    this.badgeService = badgeService;
    this.employeeDataService = employeeDataService;
   }

  ngOnInit() {
    this.getBadgeByEmpId(this.employee_id);
  }

  private getBadgeByEmpId(employee_id : number) : void {
    this.badgeService.getBadgeByEmpId(employee_id)
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
