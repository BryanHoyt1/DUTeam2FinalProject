import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatSnackBar, MatSort, MatSortModule, MatTableDataSource, MatSortable } from '@angular/material';
import { AuthService } from '../services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { User } from '../shared/users';
import { Credentials } from '../shared/credentials';
import { Employee } from '../models/employee';
import { EmployeeDataService } from '../services/emp.data.service';
import { MailService } from '../services/mail.service';
//import { ngForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // private readonly snackBar: MatSnackBar;
  // private readonly authService: AuthService;

  public loggedInUser: User;
  public credentials: Credentials = new Credentials();
  public allEmployees = [];
  public employee : Employee;
  public newEmployee : Employee;
  public employeeColumns: string[] = ["employee_id", "firstname", "lastname", "recruiter", "personal_email", "los_title", "startdate", "status"];
  //public employees$: Observable<Employee[]>;
  // Sort 
  public dataSource: MatTableDataSource<Employee>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public employees$: Observable<Employee[]>;

 private readonly employeeDataService: EmployeeDataService;
  private readonly mailService: MailService;
  // private loginSubscription: Subscription;

  // constructor(snackBar: MatSnackBar, authService: AuthService) {
  //   this.snackBar = snackBar;
  //   this.authService = authService;
  // }

  constructor(employeeDataService : EmployeeDataService, mailService: MailService) {
    this.employeeDataService = employeeDataService;
    this.mailService = mailService;
  }

   ngOnInit(): void {
     this.employee = new Employee();
     this.newEmployee = new Employee();
     this.getEmployees();
   }

   private getEmployees() : void {
    this.employeeDataService.getAllEmployees()
    .subscribe(
      (data: Employee[]) => {this.allEmployees = data;
        this.dataSource = new MatTableDataSource(this.allEmployees);
        this.sort.sort(({id: "stardate", start: "desc"}) as MatSortable);
        this.dataSource.sort = this.sort;},
      (err: any) => console.log(err),
      //(err: any) => alert(err),
      () => console.log(this.allEmployees)
    );
   }

  // ngOnDestroy(): void {
  //   this.loginSubscription && this.loginSubscription.unsubscribe();
  // }

  public getOneEmployee(employee: Employee) : void {
    this.employeeDataService.getEmpByID(employee.employee_id)
    .subscribe(
      (data: Employee) => this.employee = data[0],
      (err: any) => console.log(err),
      //(err: any) => alert(err),
      () => console.log(this.employee)
    );
  } 


  public addEmp(newEmployee: Employee) : void {
    this.employeeDataService.addEmp(newEmployee)
    .subscribe(
      (data: Employee) => this.employee = data,
      (err: any) => console.log(err),
      //(err: any) => alert(err),
      () => console.log(this.employee)
    );
  }

  public updateEmp(employee: Employee) : void {
    this.employeeDataService.updateEmp(employee)
    .subscribe(
      (data: Employee) => this.employee = data,
      (err: any) => console.log(err),
      //(err: any) => alert(err),
      () => console.log(this.employee)
    );
  }
  

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

  public sendEmail(employee: Employee): void {
    this.mailService.sendEmail(employee.employee_id)
    .subscribe(
      (data: Employee) => this.employee = data,
      //(err: any) => console.log(err),
      (err: any) => alert(err),
      () => console.log(this.employee)
    );
  }
}
