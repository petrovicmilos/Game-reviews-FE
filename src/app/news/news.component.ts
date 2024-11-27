import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsId!: number;
  newsContent: any;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.newsId = Number(this.route.snapshot.paramMap.get('id'));
    this.newsService.getNewsById(this.newsId).subscribe((news) => {
      this.newsContent = news;
    });
  }
}
