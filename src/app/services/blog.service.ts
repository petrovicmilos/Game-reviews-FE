import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Blog {
  id: number;
  title: string;
  likes: number;
  dislikes: number;
  image: string;
  text: string;
  postingDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'http://localhost:8080/blogs'; // URL backend API-ja

  constructor(private http: HttpClient) {}

  // Dobavljanje svih blogova iz baze
  getAllReviews(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl);
  }

  getAllBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl);
  }
  // Dobavljanje bloga po ID-u
  getReviewById(id: number): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/${id}`);
  }

  // Dobavljanje posta po ID-u (isto kao getReviewById)
  getPostById(id: number): Observable<Blog> {
    return this.getReviewById(id);
  }
}