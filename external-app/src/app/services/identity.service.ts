import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import { Subject } from 'rxjs';

@Injectable()
export class IdentityService {

    private currentId = {};

    setId(option, value) {
        this.currentId[option] = value;
    }

    getId() {
        return this.currentId;
    }
}

//https://www.intersysconsulting.com/blog/angular-components/
//https://medium.com/@mirokoczka/3-ways-to-communicate-between-angular-components-a1e3f3304ecb
//https://stackblitz.com/edit/angular-communication-3
//https://www.infragistics.com/community/blogs/b/infragistics/posts/simplest-way-to-share-data-between-two-unrelated-components-in-angular