import { Component } from '@angular/core';
import { UserService, User } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private userService: UserService, private router: Router) {}

  register(): void {
    console.log('Podaci pre slanja:', this.username, this.email, this.password, this.confirmPassword);

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const user: User = {
      username: this.username,
      email: this.email,
      password: this.password,
      isCritic: false,
      role: 'user'
    };

    this.userService.register(user).subscribe(
      (response) => {
        console.log('Registrovan korisnik:', response);
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log('Greška prilikom registracije:', error);
        alert('Registration failed, email might be in use.');
      }
    );
  }
}