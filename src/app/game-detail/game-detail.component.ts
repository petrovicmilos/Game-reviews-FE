import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game, GamesService } from '../services/games.service';
import { Review, ReviewService } from '../services/review.service';
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
  showReviewModal = false;
  reviewScore = 50;
  reviewText = '';
  isReviewSubmitted = false;
  latestCriticReviews: Review[] = [];
  latestUserReviews: Review[] = [];
  allReviewsCritics: Review[] = [];
  allReviewsUsers: Review[] = [];
  allReviews: Review[] = [];
  splitPlatforms: string[] = [];
  selectedPlatform: string = ''; // Čuva izabranu platformu
    platforms: string[] = [       // Lista popularnih platformi
        'PC',
        'PlayStation 5',
        'Xbox Series X',
        'Nintendo Switch',
        'PlayStation 4',
        'Xbox One',
        'iOS',
        'Android',
        'Mac',
        'Linux'
    ];

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

      this.splitPlatforms = gameData.platforms.split(',').map(platform => platform.trim());

    //   this.reviewService.getAllReviews().subscribe((reviews) => {
    //     this.allReviewsCritics = reviews.filter(review => review.isCritic);
    //     this.allReviewsUsers = reviews.filter(review => !review.isCritic);
    // });

      this.reviewService.getReviewsByGameId(gameId).subscribe((reviews) => {
        this.allReviewsCritics = reviews.filter(review => review.critic);
        console.log("Critics:", this.allReviewsCritics);
        this.allReviewsUsers = reviews.filter(review => !review.critic);
        console.log("Users", this.allReviewsUsers);
    });

      this.reviewService.getLatestReviews(gameId, 4).subscribe((reviews) => {
        this.latestCriticReviews = reviews.filter(review => review.critic);
        console.log("Critics:", this.latestCriticReviews);
        this.latestUserReviews = reviews.filter(review => !review.critic);
        console.log("Users", this.latestUserReviews);
      });
    });

    // Proveravamo da li je korisnik ulogovan
    this.userService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;

      if (status) {
        const user = this.userService.getCurrentUser();
        if (user && user.id !== undefined) {
          this.loadUserReview(gameId, user.id);
        }
      }
    });
  }

  // Učitavanje postojećeg review-a korisnika
  loadUserReview(gameId: number, userId: number) {
    this.reviewService.getReviewByGameAndUser(gameId, userId).subscribe((review) => {
      if (review) {
        this.userReview = review;
        this.reviewScore = review.score;
        this.reviewText = review.content;
        this.isReviewSubmitted = true;
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

  submitReview() {
    if (!this.isLoggedIn) return;
  
    const user = this.userService.getCurrentUser();
    if (!user || user.id === undefined) {
      console.error('User ID is undefined. Cannot submit review.');
      return;
    }
  
    const newReview = {
      userId: user.id,
      gameId: this.game.id,
      score: this.reviewScore,
      content: this.reviewText,
      platform: this.selectedPlatform
    };
  
    if (this.userReview) {
      // Edit existing review
      this.reviewService.updateReview(this.userReview.id, newReview).subscribe(updatedReview => {
        this.userReview = updatedReview;
        this.isReviewSubmitted = true;  // Postavite stanje za potvrdu
        this.closeReviewModal();
      });
    } else {
      // Create new review
      this.reviewService.addReview(newReview).subscribe(savedReview => {
        this.userReview = savedReview;
        this.isReviewSubmitted = true;  // Postavite stanje za potvrdu
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

  // Dodajte ovu promenljivu u vašu komponentu
expandedReviews: { [key: number]: boolean } = {};

// Proverite da li tekst prelazi maksimalnu dužinu
isContentOverflow(content: string): boolean {
    return content.length > 70; // Prilagodite broj karaktera po potrebi
}

// Promena stanja za prikaz celog teksta
toggleReadMore(review: Review) {
    this.expandedReviews[review.id] = !this.expandedReviews[review.id];
}

// Metoda za dobijanje broja recenzija za platformu
getReviewCountForPlatform(platform: string): number {
  return this.allReviews.filter(review => review.platform === platform).length;
}

// Metoda za dobijanje prosečnog skora za platformu
getAverageScoreForPlatform(platform: string): number {
  const reviewsForPlatform = this.allReviews.filter(review => review.platform === platform);
  if (reviewsForPlatform.length === 0) return 0;

  const totalScore = reviewsForPlatform.reduce((sum, review) => sum + review.score, 0);
  return Math.round(totalScore / reviewsForPlatform.length);
}
}
