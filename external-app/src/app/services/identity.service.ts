import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import { Subject } from 'rxjs';

@Injectable()
export class IdentityService {


    empId: number;
    currentId: BehaviorSubject<number>;
    //public currentId : number;
    //private currentId = new BehaviorSubject(this.empID);
    
    //private identity = new Subject(this.empID);
    //currentId = this.identity.asObservable();

    constructor() {
        this.currentId = new BehaviorSubject(this.empId);
    }

    /* getId() : number {
        return this.currentId;
    }  */
}

//https://www.intersysconsulting.com/blog/angular-components/
//https://medium.com/@mirokoczka/3-ways-to-communicate-between-angular-components-a1e3f3304ecb
//https://stackblitz.com/edit/angular-communication-3
//https://www.infragistics.com/community/blogs/b/infragistics/posts/simplest-way-to-share-data-between-two-unrelated-components-in-angular