import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../services/trending.service';
import { NewsService, News } from '../services/news.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  trendingPosts: any[] = [];
  recentNews: News[] = []; // Typed as an array of News

  constructor(
    private trendingService: TrendingService,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    // Fetch trending posts
    this.trendingService.getTrendingPosts().subscribe((posts: any[]) => {
      this.trendingPosts = posts;
    });

    // Fetch recent news
    this.newsService.getRecentNews().subscribe((news: News[]) => {
      this.recentNews = news;
    });
  }

  // Get the most viewed post as the large content
  get trendingLargeContent() {
    return this.trendingPosts.reduce((prev, current) =>
      prev.views > current.views ? prev : current
    );
  }

  // Get the remaining top 4 trending posts
  get trendingLowerContent() {
    return this.trendingPosts
      .filter((post) => post.id !== this.trendingLargeContent.id)
      .slice(0, 4);
  }
}
