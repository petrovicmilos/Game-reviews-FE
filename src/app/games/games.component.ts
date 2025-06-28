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

  getImageUrl(imagePath: string): string {
  if (imagePath.startsWith('../assets/') || imagePath.startsWith('assets/')) {
    return imagePath;
  } else if (imagePath.startsWith('/uploads/')) {
    return 'http://localhost:8080' + imagePath;
  }
  return imagePath; // fallback
}

}