import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game, GamesService } from '../services/games.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  game!: Game;

  constructor(private route: ActivatedRoute, private gameService: GamesService) {}

  ngOnInit(): void {
    const gameId = +this.route.snapshot.paramMap.get('id')!;
    this.game = this.gameService.getGameById(gameId)!;
    
  }

  getScoreText(score: number): string {
    if (score < 20) {
      return 'Overwhelming dislike';
    } else if (score >= 20 && score < 50) {
      return 'Generally Unfavorable';
    } else if (score >= 50 && score < 75) {
      return 'Mixed or Average';
    } else if (score >= 75 && score < 90) {
      return 'Generally Favorable';
    } else {
      return 'Universal Acclaim';
    }
  }
  
}
