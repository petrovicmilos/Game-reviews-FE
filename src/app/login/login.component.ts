import { Component } from '@angular/core';
import { UserService, User } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private userService: UserService, private router: Router) {}

  login(): void {
    this.userService.login(this.email, this.password).subscribe(
      (user) => {
        alert(`Welcome, ${user.username}!`);
        localStorage.setItem('loggedInUser', JSON.stringify(user)); // Čuvanje sesije
        this.router.navigate(['/']);
      },
      () => alert('Invalid credentials, please try again.')
    );
  }
}