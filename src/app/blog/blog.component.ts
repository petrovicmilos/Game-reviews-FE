import { Component, OnInit } from '@angular/core';
import { BlogService, Blog } from '../services/blog.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  allReviews: Blog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    const allReviews = this.blogService.getAllReviews();
    this.allReviews = allReviews;
   }
}
