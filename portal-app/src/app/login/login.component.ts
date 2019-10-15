import { Component} from '@angular/core';
import { User } from "../shared/users";
import { Credentials } from "../shared/credentials";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loggedInUser: User;
  public credentials: Credentials = new Credentials();

  public login(): void {
    if (this.credentials.username && this.credentials.password) {
      const user = new User();
      user.username = this.credentials.username;
      this.loggedInUser = user;
    } else {
      // TODO: replace console.log to snackBar.open
      console.log("Failed to login user!");
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
