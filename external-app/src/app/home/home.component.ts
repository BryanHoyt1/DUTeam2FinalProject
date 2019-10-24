import { Component} from '@angular/core';
//import { Employee } from '../models/employee';
//import { Observable } from 'rxjs';
//import { EmployeeDataService } from '../services/emp.data.service';
//import { AuthService } from '../services/auth.service';
import { IdentityService } from '../services/identity.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  currentId : any;
  //public employee: Employee;
  //private readonly employeeDataService: EmployeeDataService;
  private readonly identityService : IdentityService;

  constructor(identityService: IdentityService) { 
    //this.employeeDataService = employeeDataService;
    this.identityService = identityService;
  }

  ngOnInit() {
    this.currentId = this.identityService.getId();
    console.log(this.currentId);
    this.identityService.setId('empId', this.currentId);
  }
}
