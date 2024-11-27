import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../services/trending.service';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  trendingPosts: any[] = [];
  recentNews: any[] = [];

  constructor(
    private trendingService: TrendingService,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.trendingService.getTrendingPosts().subscribe((posts) => {
      this.trendingPosts = posts;
    });

    this.newsService.getRecentNews().subscribe((news) => {
      this.recentNews = news;
    });
  }

  get trendingLargeContent() {
    return this.trendingPosts.reduce((prev, current) =>
      prev.views > current.views ? prev : current
    );
  }

  get trendingLowerContent() {
    return this.trendingPosts
      .filter((post) => post.id !== this.trendingLargeContent.id)
      .slice(0, 4); // Uzimamo samo prva 4 elementa
  }
  
}
