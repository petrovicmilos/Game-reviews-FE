import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    const user = this.userService.getCurrentUser();
    if (user && user.role === 'admin') {
      return true; // Ako je admin, dozvoli pristup
    } else {
      alert('Access denied. Admins only.');
      this.router.navigate(['/']); // Ako nije admin, preusmeri na home
      return false;
    }
  }
}