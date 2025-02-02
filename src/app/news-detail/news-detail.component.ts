import { Component, OnInit } from '@angular/core';
import { NewsService, News } from '../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import { Game, GamesService } from '../services/games.service';
import { BlogService, Blog } from '../services/blog.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  news!: News;
  faHeart = faHeart;
  faComment = faComment;
  popularArticles: Blog[] = [];
  topFiveGames: Game[] = [];

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private blogService: BlogService,
    private gamesService: GamesService
  ) {}

  ngOnInit(): void {
    // Retrieve the `id` from the route
    const newsId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchNewsById(newsId);
    this.fetchPopularArticles();
    this.fetchTopFiveGames();
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
}