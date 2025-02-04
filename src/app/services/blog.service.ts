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

  // Kreiranje novog bloga
  createBlog(blogData: FormData): Observable<Blog> {
    return this.http.post<Blog>(`${this.apiUrl}/create`, blogData);
  }

  // Ažuriranje postojećeg bloga
  updateBlog(id: number, blogData: FormData): Observable<Blog> {
    return this.http.put<Blog>(`${this.apiUrl}/update/${id}`, blogData);
  }

  // Brisanje bloga
  deleteBlog(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  // Lajkovanje bloga
  likeBlog(id: number): Observable<Blog> {
    return this.http.post<Blog>(`${this.apiUrl}/${id}/like`, {});
  }

  // Dislajkovanje bloga
  dislikeBlog(id: number): Observable<Blog> {
    return this.http.post<Blog>(`${this.apiUrl}/${id}/dislike`, {});
  }
}