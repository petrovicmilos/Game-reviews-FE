import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../services/trending.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postId!: any;
  postContent: any;

  constructor(
    private route: ActivatedRoute,
    private trendingService: TrendingService
  ) {}

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    this.trendingService.getPostById(this.postId).subscribe((post: any) => {
      this.postContent = post;
    });
  }
}
