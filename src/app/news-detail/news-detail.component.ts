import { Component, OnInit } from '@angular/core';
import { NewsService, News } from '../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import { Game, GamesService } from '../services/games.service';
import { BlogService, Blog } from '../services/blog.service';
import { CommentService, Comment } from '../services/comment.service'; // Dodajte CommentService
import { UserService } from '../services/user.service'; // Dodajte UserService

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.component.html',
    styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent implements OnInit {
    news!: News;
    faHeart = faHeart;
    faComment = faComment;
    popularArticles: Blog[] = [];
    topFiveGames: Game[] = [];
    comments: Comment[] = []; // Dodajte komentare
    commentCount: number = 0; // Broj komentara
    newComment: string = ''; // Sadržaj novog komentara

    constructor(
        private route: ActivatedRoute,
        private newsService: NewsService,
        private blogService: BlogService,
        private gamesService: GamesService,
        private commentService: CommentService, // Dodajte CommentService
        private userService: UserService // Dodajte UserService
    ) {}

    ngOnInit(): void {
        // Retrieve the `id` from the route
        const newsId = +this.route.snapshot.paramMap.get('id')!;
        this.fetchNewsById(newsId);
        this.fetchPopularArticles();
        this.fetchTopFiveGames();
        this.fetchComments(newsId); // Učitajte komentare
    }

    fetchNewsById(id: number): void {
        this.newsService.getNewsById(id).subscribe((newsData: News) => {
            this.news = newsData;
        });
    }

    fetchPopularArticles(): void {
        this.blogService.getAllBlogs().subscribe((allArticles: Blog[]) => {
            this.popularArticles = allArticles.slice(0, 5);
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

    // Učitajte komentare za vest
    fetchComments(newsId: number): void {
        this.commentService.getCommentsByNewsId(newsId).subscribe((comments) => {
            this.comments = comments;
            this.commentCount = comments.length; // Postavite broj komentara

            // Dobavite korisničke podatke za svaki komentar
            this.comments.forEach((comment) => {
                this.userService.getUserById(comment.userId).subscribe((user) => {
                    comment.user = user; // Dodajte korisničke podatke u komentar
                });
            });
        });
    }

    submitComment(): void {
      const user = this.userService.getCurrentUser();
      if (!user || !user.id || !this.newComment.trim()) {
          alert('Please log in and write a comment.');
          return;
      }
  
      const commentData = {
          userId: user.id,
          content: this.newComment,
          newsId: this.news.id, // Koristite newsId za vesti
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