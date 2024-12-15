import { Component, OnInit } from '@angular/core';
import { Game, GamesService } from '../services/games.service';

@Component({
  selector: 'app-latest-reviews',
  templateUrl: './latest-reviews.component.html',
  styleUrls: ['./latest-reviews.component.scss']
})
export class LatestReviewsComponent implements OnInit {
  latestReview!: Game; // Large content review
  reviewsGrid: Game[] = []; // Reviews for the grid
  topFiveReviews: Game[] = []; // Top 5 reviews based on audience score

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    const allGames = this.gamesService.getAllGames();

    // Fetch the first review as the large content
    this.latestReview = allGames[0];

    // Fetch the next 3 reviews for the grid section
    this.reviewsGrid = allGames.slice(1, 4);

    // Fetch the top 5 reviews based on audience score
    this.topFiveReviews = allGames
      .slice() // Copy the array to avoid modifying the original
      .sort((a, b) => b.audienceScore - a.audienceScore) // Sort by audience score in descending order
      .slice(0, 5); // Take the top 5
  }
}
