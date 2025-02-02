import { Component, OnInit } from '@angular/core';
import { NewsService, News } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  allNews: News[] = []; // Array to store all news

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    // Fetch all news from the service
    this.newsService.getAllNews().subscribe((newsData: News[]) => {
      this.allNews = newsData;
    });
    
  }
}
