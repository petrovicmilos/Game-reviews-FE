import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog, BlogService } from '../services/blog.service';
import { Game, GamesService } from '../services/games.service';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {
  postId!: number;
  postContent: any;
  popularArticles: any[] = [];
  topFiveGames: Game[] = [];
  faHeart = faHeart;
  faComment = faComment;
  routeSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private gamesService: GamesService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe((params) => {
      this.postId = Number(params.get('id'));
      this.fetchPostContent();
      this.fetchPopularArticles();
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
}
