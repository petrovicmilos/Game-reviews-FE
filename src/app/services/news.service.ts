import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface News {
  id?: number; // id je opcioni jer se generiše u bazi
  title: string;
  content: string;
  postingDate: string;
  image: string;
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

  // Kreiraj novu vest
  createNews(newsData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, newsData, {
      reportProgress: true,
      observe: 'response'
    });
  }
  

  // Ažuriraj postojeću vest
  updateNews(id: number, news: FormData): Observable<News> {
    return this.http.put<News>(`${this.apiUrl}/update/${id}`, news);
  }

  // Obriši vest po ID-u
  deleteNews(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}