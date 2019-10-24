import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Badge } from '../models/badge';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BadgeService {

    uri : string = 'http://localhost:3000/badge';


    constructor(private http: HttpClient) {
        this.http = http;
    }

    public getBadgeByEmpId(id: number) {
        return this.http.get<Badge>(`${this.uri}/${id}`);
    }

    /* public addBadgeForm(badge: Badge): Observable<Badge> {
        return this.http.post<Badge>(this.uri, badge);
    } */
}