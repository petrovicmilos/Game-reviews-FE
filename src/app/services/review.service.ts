import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Review {
  id?: number;
  userId?: number;
  gameId: number;
  score: number;
  content: string;
  isCritic: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://localhost:8080/reviews';

  constructor(private http: HttpClient) {}

  getReviewByGameAndUser(gameId: number, userId: number): Observable<Review | null> {
    return this.http.get<Review | null>(`${this.apiUrl}/${gameId}/${userId}`);
  }

  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(`${this.apiUrl}`, review);
  }

  updateReview(reviewId: number, review: Review): Observable<Review> {
    return this.http.put<Review>(`${this.apiUrl}/${reviewId}`, review);
  }
}
