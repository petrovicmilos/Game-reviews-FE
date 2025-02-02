import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface News {
  id: number;
  title: string;
  image: string;
  content: string;
  text: string;
  publishedDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'http://localhost:8080/news'; // API endpoint za news podatke

  constructor(private http: HttpClient) {}

  // Dohvati sve vesti iz baze
  getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }

  // Dohvati vest po ID-u iz baze
  getNewsById(id: number): Observable<News> {
    return this.http.get<News>(`${this.apiUrl}/${id}`);
  }

  // Dohvati poslednje 3 vesti
  getRecentNews(): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiUrl}/latest`);
  }  
}