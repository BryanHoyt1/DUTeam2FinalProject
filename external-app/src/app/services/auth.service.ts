import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../models/credentials';
import { Employee } from '../models/employee';
import { Observable, ReplaySubject, throwError, } from 'rxjs';
import { Result } from '../models/result';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    uri : string = 'http://localhost:3000/extLogin';

    private userSubject = new ReplaySubject<Employee>();

    //public empData : any;

    constructor(private http: HttpClient) {
        this.http = http;
    }

    public authEmployee(credentials: Credentials): Observable<Employee> {
        return this.http.post<Employee>(this.uri, credentials);
       /*  return this.http.post<Result<Employee>>(this.uri, credentials)
            .pipe(
                map((result: Result<Employee>): Employee => {
                    const loggedInEmp: Employee = result._data;
                    this.userSubject.next(loggedInEmp);
                    return loggedInEmp;
                }),
                catchError((e) => throwError(e.error._errors[0]))
            ); */
    }
}