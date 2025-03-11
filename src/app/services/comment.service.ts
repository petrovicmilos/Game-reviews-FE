import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Comment {
    id: number;
    userId: number;
    content: string;
    blogId?: number; // Opciono za blogove
    newsId?: number; // Opciono za vesti
    createdAt: string;
    likes: number;
    dislikes: number;
    user?: {
        username: string;
    };
}

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    private apiUrl = 'http://localhost:8080/comments';

    constructor(private http: HttpClient) {}

    // Dobavi komentare za određeni blog
    getCommentsByBlogId(blogId: number): Observable<Comment[]> {
        return this.http.get<Comment[]>(`${this.apiUrl}/by-blog/${blogId}`);
    }

    getCommentsByNewsId(newsId: number): Observable<Comment[]> {
        return this.http.get<Comment[]>(`${this.apiUrl}/by-news/${newsId}`);
    }

    createComment(comment: { userId: number; content: string; blogId?: number; newsId?: number }): Observable<Comment> {
        return this.http.post<Comment>(`${this.apiUrl}`, comment);
    }
}