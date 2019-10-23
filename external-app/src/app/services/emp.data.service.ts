import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeeDataService {
    uri : string = 'http://localhost:3000/home'

    constructor(private http: HttpClient) {
        this.http = http;
    }

    /* public getAllEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.uri);
    } */

    public getEmpByID(id): Observable<Employee> {
        return this.http.get<Employee>(`${this.uri}/${id}`);
    }

    /* public addEmp(newEmployee: Employee): Observable<Employee> {
        return this.http.post<Employee>(this.uri, newEmployee);
    } */

    public updateEmp(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.uri}`, employee);
    }
}