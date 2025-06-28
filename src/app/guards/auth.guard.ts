import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      const role = this.userService.getRole();
      if (role === 'admin') {
        return true; // ✅ token postoji i korisnik je admin
      }
    }

    alert('Access denied. Admins only.');
    this.router.navigate(['/']);
    return false;
  }
}