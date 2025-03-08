import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Review {
  id: number;
  userId: number;
  gameId: number;
  score: number;
  content: string;
  isCritic: boolean;
  createdAt: string;
  user: {
    id: number;
    username: string;
  };
}

interface ReviewResponse {
  review: Review;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://localhost:8080/reviews';

  constructor(private http: HttpClient) {}

  getReviewByGameAndUser(gameId: number, userId: number): Observable<Review | null> {
    return this.http.get<Review | null>(`${this.apiUrl}/by-game-and-user`, {
      params: { gameId: gameId.toString(), userId: userId.toString() }
    });
  }

  addReview(review: { userId: number, gameId: number, score: number, content: string }): Observable<Review> {
    return this.http.post<Review>(`${this.apiUrl}`, review);
  }
  
  updateReview(reviewId: number, review: { userId: number, gameId: number, score: number, content: string }): Observable<Review> {
    return this.http.put<Review>(`${this.apiUrl}/${reviewId}`, review);
  }

  getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}`);
  }

  getLatestReviews(gameId: number, limit: number = 4): Observable<Review[]> {
    return this.http.get<ReviewResponse[]>(`${this.apiUrl}/latest-reviews`, {
      params: { gameId: gameId.toString(), limit: limit.toString() }
    }).pipe(
      map((response: ReviewResponse[]) => response.map(item => ({
        ...item.review,
        user: {
          id: item.review.user.id,
          username: item.username  // Koristimo username iz odgovora
        }
      })))
    );
  }
}