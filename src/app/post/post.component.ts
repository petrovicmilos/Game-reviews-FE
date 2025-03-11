import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog, BlogService } from '../services/blog.service';
import { Game, GamesService } from '../services/games.service';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { CommentService, Comment } from '../services/comment.service'; // Dodajte CommentService
import { UserService } from '../services/user.service'; // Dodajte UserService

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
    postId!: number;
    postContent: any;
    popularArticles: any[] = [];
    topFiveGames: Game[] = [];
    faHeart = faHeart;
    faComment = faComment;
    routeSub!: Subscription;
    comments: Comment[] = []; // Dodajte komentare
    commentCount: number = 0; // Broj komentara

    constructor(
        private route: ActivatedRoute,
        private blogService: BlogService,
        private gamesService: GamesService,
        private commentService: CommentService, // Dodajte CommentService
        private userService: UserService // Dodajte UserService
    ) {}

    ngOnInit(): void {
        this.routeSub = this.route.paramMap.subscribe((params) => {
            this.postId = Number(params.get('id'));
            this.fetchPostContent();
            this.fetchPopularArticles();
            this.fetchComments(); // Učitajte komentare
        });

        this.fetchTopFiveGames();
    }

    ngOnDestroy(): void {
        if (this.routeSub) {
            this.routeSub.unsubscribe();
        }
    }

    fetchPostContent(): void {
        this.blogService.getPostById(this.postId).subscribe((post: any) => {
            this.postContent = post;
        });
    }

    fetchPopularArticles(): void {
        this.blogService.getAllReviews().subscribe((allArticles: Blog[]) => {
            this.popularArticles = allArticles
                .filter((article) => article.id !== this.postId)
                .slice(0, 5);
        });
    }

    fetchTopFiveGames(): void {
        this.gamesService.getAllGames().subscribe((allGames: Game[]) => {
            this.topFiveGames = allGames
                .slice()
                .sort((a, b) => b.averageAudienceScore - a.averageAudienceScore)
                .slice(0, 5);
        });
    }

    fetchComments(): void {
        this.commentService.getCommentsByBlogId(this.postId).subscribe((comments) => {
            this.comments = []; // Resetujte listu komentara
            this.commentCount = comments.length; // Postavite broj komentara
    
            // Učitajte korisničke podatke za svaki komentar
            comments.forEach((comment) => {
                this.userService.getUserById(comment.userId).subscribe((user) => {
                    comment.user = user; // Dodajte korisničke podatke u komentar
                    this.comments.push(comment); // Dodajte komentar u listu
                });
            });
        });
    }
    
    newComment: string = ''; // Sadržaj novog komentara

    submitComment(): void {
        const user = this.userService.getCurrentUser();
        if (!user || !user.id || !this.newComment.trim()) {
            alert('Please log in and write a comment.');
            return;
        }
    
        const commentData = {
            userId: user.id,
            content: this.newComment,
            blogId: this.postId,
        };
    
        this.commentService.createComment(commentData).subscribe((newComment) => {
            // Učitajte korisničke podatke pre dodavanja komentara
            this.userService.getUserById(newComment.userId).subscribe((user) => {
                newComment.user = user; // Dodajte korisničke podatke u komentar
                this.comments.push(newComment); // Dodajte novi komentar u listu
                this.commentCount++; // Povećajte broj komentara
                this.newComment = ''; // Resetujte polje za unos
            });
        });
    }
}