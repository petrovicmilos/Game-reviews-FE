import { Component, OnInit } from '@angular/core';
import { Game, GamesService } from '../services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  allGames: Game[] = [];
  
  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.gamesService.getAllGames().subscribe((games: Game[]) => {
      this.allGames = games;
    });
  }
}