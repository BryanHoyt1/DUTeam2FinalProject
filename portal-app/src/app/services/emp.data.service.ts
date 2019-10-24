import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { Result } from '../models/result';
import {map, share} from 'rxjs/operators';
import { UserSearchParams } from '../home/models/userSearchParams';

@Injectable({
    providedIn: 'root'
})
export class EmployeeDataService {
    uri : string = 'http://localhost:3000/home'

    constructor(private http: HttpClient) {
        this.http = http;
    }

    public getAllEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.uri);
    }

    public getEmpByID(id): Observable<Employee> {
        return this.http.get<Employee>(`${this.uri}/${id}`);
    }
    
    public getUsers(userSearchParams?: UserSearchParams): Observable<Employee[]> {
        let params: HttpParams = new HttpParams();
        if (userSearchParams) {
          params = params.append("filterProp", userSearchParams.filterProp);
          params = !userSearchParams.filterText ? params : params.append("filterText", userSearchParams.filterText);
          params = params.append("sortAsc", userSearchParams.sortAsc ? "true" : "false");
        }
        return this.http.get<Result<Employee[]>>(this.uri, {params})
          .pipe(
            map((response: Result<Employee[]>) => response._data),
            share()
          );
      }

    public addEmp(newEmployee: Employee): Observable<Employee> {
        return this.http.post<Employee>(this.uri, newEmployee);
    }

    public updateEmp(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.uri}`, employee);
    }
}