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
      const allGames = this.gamesService.getAllGames();
      this.allGames = allGames;
     }

}
