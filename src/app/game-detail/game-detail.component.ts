import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game, GamesService } from '../services/games.service';
import { ReviewService } from '../services/review.service';
import { UserService } from '../services/user.service';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  game!: Game;
  userReview: any = null;
  isLoggedIn = false;
  isCritic = false;
  showReviewModal = false;
  reviewScore = 50;
  reviewText = '';

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  constructor(
    private route: ActivatedRoute,
    private gameService: GamesService,
    private reviewService: ReviewService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const gameIdParam = this.route.snapshot.paramMap.get('id');
  const gameId = gameIdParam ? +gameIdParam : null;

  if (!gameId) {
    console.error('Game ID is undefined or invalid.');
    return;
  }
    // Učitavanje igre
    this.gameService.getGameById(gameId).subscribe((gameData: Game) => {
      this.game = gameData;
    });

    // Proveravamo da li je korisnik ulogovan
    this.userService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;

      if (status) {
        const user = this.userService.getCurrentUser();
        if (user && user.id !== undefined) {
          this.isCritic = user.role === 'critic';
          this.loadUserReview(gameId, user.id);
        }
      }
    });
  }

  // Učitavanje postojećeg review-a korisnika
  loadUserReview(gameId: number | null, userId: number | null) {
    if (gameId === null || userId === null) {
      console.error('Invalid gameId or userId for loading user review.');
      return;
    }
    this.reviewService.getReviewByGameAndUser(gameId, userId).subscribe((review) => {
      if (review) {
        this.userReview = review;
        this.reviewScore = review.score;
        this.reviewText = review.content;
      }
    });
  }

  // Otvaranje modala za unos ili editovanje review-a
  openReviewModal() {
    this.showReviewModal = true;
  }

  // Zatvaranje modala
  closeReviewModal() {
    this.showReviewModal = false;
  }

  // Slanje novog review-a ili editovanje postojećeg
  submitReview() {
    if (!this.isLoggedIn) return;

    const user = this.userService.getCurrentUser();
    if (!user) return;

    const newReview = {
      userId: user.id,
      gameId: this.game.id,
      score: this.reviewScore,
      content: this.reviewText,
      isCritic: this.isCritic
    };

    if (this.userReview) {
      // Editovanje postojećeg review-a
      this.reviewService.updateReview(this.userReview.id, newReview).subscribe(updatedReview => {
        this.userReview = updatedReview;
        this.closeReviewModal();
      });
    } else {
      // Kreiranje novog review-a
      this.reviewService.addReview(newReview).subscribe(savedReview => {
        this.userReview = savedReview;
        this.closeReviewModal();
      });
    }
  }

  // Konvertovanje ocene u tekst
  getScoreText(score: number): string {
    if (score < 20) return 'Overwhelming dislike';
    if (score >= 20 && score < 50) return 'Generally Unfavorable';
    if (score >= 50 && score < 75) return 'Mixed or Average';
    if (score >= 75 && score < 90) return 'Generally Favorable';
    return 'Universal Acclaim';
  }
}
