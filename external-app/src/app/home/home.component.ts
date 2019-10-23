import { Component} from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { EmployeeDataService } from '../services/emp.data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  public employee: Employee;
  private readonly employeeDataService: EmployeeDataService;

  constructor(employeeDataService: EmployeeDataService) { 
    this.employeeDataService = employeeDataService;
  }

  ngOnInit() {
    //this.employee = this.employee;
    
    //this.getEmployeeData(this.employee);
  }

  /* private getEmployeeData(employee: Employee) : void {
    this.employeeDataService.getEmpByID(employee.employee_id)
      .subscribe(
        (data: Employee) => this.employee = data[0],
        (err: any) => console.log(err),
        () => console.log(this.employee)
      );
  } */
}
