import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewsService, Review } from '../services/reviews.service';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.scss']
})
export class ReviewDetailComponent implements OnInit {
  review!: Review;

  constructor(private route: ActivatedRoute, private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    const reviewId = +this.route.snapshot.paramMap.get('id')!;
    this.review = this.reviewsService.getReviewById(reviewId)!;
  }
}
