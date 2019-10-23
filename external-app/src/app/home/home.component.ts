import { Component} from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { EmployeeDataService } from '../services/emp.data.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  public employee: Employee;
  public data : any;
  private readonly employeeDataService: EmployeeDataService;
  private readonly authService : AuthService;


  constructor(employeeDataService: EmployeeDataService, authService: AuthService) { 
    this.employeeDataService = employeeDataService;
    this.authService = authService;
  }

  ngOnInit() {
    
    this.data = this.authService.data;
    this.getEmployeeData(this.data);
  }

  private getEmployeeData(employee: Employee) : void {
    this.employeeDataService.getEmpByID(employee.employee_id)
      .subscribe(
        (data: Employee) => this.employee = data[0],
        (err: any) => console.log(err),
        () => console.log(this.employee)
      );
  }
}
