import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../models/credentials';
import { Employee } from '../models/employee';
import { Observable, ReplaySubject, throwError, } from 'rxjs';
import { Result } from '../models/result';
import {catchError, map} from 'rxjs/operators';
import { LocalStorageService } from './local.storage.service';

@Injectable()
export class AuthService {
    uri : string = 'http://localhost:3000/extLogin';

    private readonly http : HttpClient;
    private localStorageService: LocalStorageService;
    private userSubject = new ReplaySubject<Employee>();

    constructor(http: HttpClient, localStorageService: LocalStorageService) {
        this.localStorageService = localStorageService;
        this.http = http;
        this.init();
    }

    private init(): void {
        const employee : Employee | null = this.getEmpFromLocalStorage();

        if (employee !== null) {
            this.userSubject.next(employee);
        }
    }

    public login(credentials: Credentials): Observable<Employee> {
        //return this.http.post<Employee>(this.uri, credentials);
        return this.http.post<Result<Employee>>(this.uri, credentials)
            .pipe(
                map((result: Result<Employee>): Employee => {
                    const loggedInEmp: Employee = result._data;
                    this.userSubject.next(loggedInEmp);
                    this.localStorageService.setItem("employee", JSON.stringify(loggedInEmp));
                    return loggedInEmp;
                }),
                catchError((e) => throwError(e.error._errors[0]))
            ); 
    }

    public getEmp(): Observable<Employee> {
        return this.userSubject.asObservable();
    }

    private getEmpFromLocalStorage(): Employee | null {
        const empJsonStr : string | null = this.localStorageService.getItem("employee");
        console.log(empJsonStr);
        if (empJsonStr) {
            return JSON.parse(empJsonStr);
        }

        return null;
    }
}