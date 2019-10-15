import {Injectable} from "@angular/core";
import {Observable, ReplaySubject, Subscriber} from "rxjs";
import {User} from "../shared/users";
import {Credentials} from '../shared/credentials';

@Injectable()
export class AuthService {
  private userSubject = new ReplaySubject<User>();

  // TODO: inject HttpClient and LocalStorageService
  // TODO: check for/set existing user via localStorageService.getItem("user")
  constructor() {
  }

  public login(credentials: Credentials): Observable<void> {
    // TODO: use HttpClient instead to call /login
    return Observable.create((observer: Subscriber<void>) => {
      if (credentials.username && credentials.password) {
        credentials.password = undefined;
        const user = new User();
        user.username = credentials.username;
        this.userSubject.next(user);
        observer.next();
      } else {
        observer.error("Failed to login user!");
      }
    });
  }

  public getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }
}
