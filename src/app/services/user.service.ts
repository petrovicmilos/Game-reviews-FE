import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  isCritic: boolean;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users';

  // BehaviorSubject za praćenje statusa prijave
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable(); // Observable koji komponente mogu pratiti

  // BehaviorSubject za praćenje da li je korisnik admin
  private isAdminSubject = new BehaviorSubject<boolean>(this.checkIfAdmin());
  isAdmin$ = this.isAdminSubject.asObservable();

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, user);
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, { email, password }).pipe(
      // Kada korisnik uspešno uđe, sačuvaj ga u localStorage i ažuriraj BehaviorSubject
      tap((user) => {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        this.isLoggedInSubject.next(true); // Obaveštava sve komponente o promeni statusa
        this.isAdminSubject.next(user.role === 'admin');
      })
    );
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
    this.isLoggedInSubject.next(false);
    this.isAdminSubject.next(false);
  }

  private hasToken(): boolean {
    return this.getCurrentUser() !== null;
  }

  getCurrentUser(): User | null {
    const userData = localStorage.getItem('loggedInUser');
    return userData ? JSON.parse(userData) : null;
  }

  getRole(): string | null {
    const user = this.getCurrentUser();
    return user ? user.role : null;
  }

  private checkIfAdmin(): boolean {
    return this.getRole() === 'admin';
  }
}