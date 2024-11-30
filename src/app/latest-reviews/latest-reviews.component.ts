import { Component, OnInit } from '@angular/core';
import { ReviewsService, Review } from '../services/reviews.service';

@Component({
  selector: 'app-latest-reviews',
  templateUrl: './latest-reviews.component.html',
  styleUrls: ['./latest-reviews.component.scss']
})
export class LatestReviewsComponent implements OnInit {
  latestReview!: Review; // Large content review
  reviewsGrid: Review[] = []; // Reviews for the grid
  topFiveReviews: Review[] = []; // Top 5 reviews based on audience score

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    const allReviews = this.reviewsService.getAllReviews();

    // Fetch the first review as the large content
    this.latestReview = allReviews[0];

    // Fetch the next 3 reviews for the grid section
    this.reviewsGrid = allReviews.slice(1, 4);

    // Fetch the top 5 reviews based on audience score
    this.topFiveReviews = allReviews
      .slice() // Copy the array to avoid modifying the original
      .sort((a, b) => b.audienceScore - a.audienceScore) // Sort by audience score in descending order
      .slice(0, 5); // Take the top 5
  }
}
