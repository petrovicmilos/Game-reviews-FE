import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  isCritic: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users';

  // BehaviorSubject za praćenje statusa prijave
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable(); // Observable koji komponente mogu pratiti

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
      })
    );
  }

  logout(): void {
    localStorage.removeItem('loggedInUser'); // Briše podatke iz localStorage
    this.isLoggedInSubject.next(false); // Obaveštava sve komponente da korisnik više nije prijavljen
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('loggedInUser');
  }
}