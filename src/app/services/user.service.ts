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

  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private isAdminSubject = new BehaviorSubject<boolean>(this.checkIfAdmin());
  isAdmin$ = this.isAdminSubject.asObservable();

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response) => {
        const token = response.token;
        localStorage.setItem('token', token);
        this.isLoggedInSubject.next(true);
        this.isAdminSubject.next(this.decodeRoleFromToken(token) === 'admin');
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
    this.isAdminSubject.next(false);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  getCurrentUser(): User | null {
    const payload = this.decodeToken();
    if (!payload) return null;

    return {
      id: payload.id,
      username: payload.username || '',
      email: payload.sub,
      password: '',
      isCritic: payload.isCritic || false,
      role: payload.role || 'user',
    };

  }

  getRole(): string | null {
    const payload = this.decodeToken();
    return payload?.role || null;
  }

  private checkIfAdmin(): boolean {
    return this.getRole() === 'admin';
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userId}`);
  }

  private decodeToken(): any {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const payload = token.split('.')[1];
      const decoded = atob(payload);
      return JSON.parse(decoded);
    } catch (e) {
      return null;
    }
  }

  decodeRoleFromToken(token: string): string {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role || 'user';
    } catch (e) {
      return 'user';
    }
  }
}