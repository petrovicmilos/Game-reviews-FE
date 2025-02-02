import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Game {
  id: number;
  title: string;
  genre: string;
  releaseDate: string;
  description: string;
  averageCriticScore: number;
  averageAudienceScore: number;
  image: string; // Dodaj ako ti je potreban za prikaz
}

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private apiUrl = 'http://localhost:8080/games'; // API endpoint iz Spring Boot-a

  constructor(private http: HttpClient) {}

  // Dobijanje svih igara iz baze
  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }

  // Dobijanje igre po ID-u
  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.apiUrl}/${id}`);
  }

  // Dodavanje nove igre
  createGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.apiUrl, game);
  }

  // Ažuriranje postojeće igre
  updateGame(id: number, game: Game): Observable<Game> {
    return this.http.put<Game>(`${this.apiUrl}/${id}`, game);
  }

  // Brisanje igre po ID-u
  deleteGame(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
