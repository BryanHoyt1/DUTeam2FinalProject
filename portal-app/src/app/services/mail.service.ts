import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MailService {
    uri : string = 'http://localhost:3000/mail';

    constructor(private http: HttpClient) {
        this.http = http;
    }

    public sendEmail(employee): Observable<any> {
        return this.http.post(this.uri, employee);
    }
}