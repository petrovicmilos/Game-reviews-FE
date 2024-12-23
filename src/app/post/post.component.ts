import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Game, GamesService } from '../services/games.service';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postId!: number;
  postContent: any;
  popularArticles: any[] = [];
  topFiveGames: Game[] = [];
  faHeart = faHeart;
  faComment = faComment;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private gamesService: GamesService
  ) {}

  ngOnInit(): void {
    // Fetch the current post
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    this.blogService.getPostById(this.postId).subscribe((post: any) => {
      this.postContent = post;
    });

    // Fetch 5 popular articles excluding the current one
    const allArticles = this.blogService.getAllReviews();
    this.popularArticles = allArticles
      .filter((article) => article.id !== this.postId)
      .slice(0, 5);

    // Fetch top 5 games based on audience score
    const allGames = this.gamesService.getAllGames();
    this.topFiveGames = allGames
      .slice()
      .sort((a, b) => b.audienceScore - a.audienceScore)
      .slice(0, 5);
  }
}
