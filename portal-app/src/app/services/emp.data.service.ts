import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeeDataService {
    uri = 'http://localhost:3000/home'

    constructor(private http: HttpClient) {}

    getAllEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.uri);
    }
}