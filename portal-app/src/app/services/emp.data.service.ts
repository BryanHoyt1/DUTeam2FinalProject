import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { Result } from '../models/result';
import {map, share} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EmployeeDataService {
    uri : string = 'http://localhost:3000/home'

    constructor(private http: HttpClient) {
        this.http = http;
    }

    /* public getAllEmployees(): Observable<Employee[]> {
        return this.http.get<Result<Employee[]>>(this.uri)
        .pipe(
            map((response: Result<Employee[]>) => response._data),
            share()
        );
    } */

    public getAllEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.uri);
    }
}