import { Component, OnInit } from '@angular/core';
import { ReviewsService, Review } from '../services/reviews.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  allReviews: Review[] = [];

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    const allReviews = this.reviewsService.getAllReviews();
    this.allReviews = allReviews;
   }
}
