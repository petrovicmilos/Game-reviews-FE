import { Component, OnInit } from '@angular/core';
import { NewsService, News } from '../services/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  news!: News;

  constructor(private route: ActivatedRoute, private newsService: NewsService) {}

  ngOnInit(): void {
    // Retrieve the `id` from the route
    const newsId = +this.route.snapshot.paramMap.get('id')!;

    // Fetch the news item by its ID
    this.news = this.newsService.getNewsById(newsId)!;
  }
}
