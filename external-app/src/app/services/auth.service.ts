import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../models/credentials';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    uri : string = 'http://localhost:3000/extLogin';

    public empData : any;

    constructor(private http: HttpClient) {
        this.http = http;
    }

    public authEmployee(credentials: Credentials): Observable<Employee> {
        return this.http.post<Employee>(this.uri, credentials);
    }
}