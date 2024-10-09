import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = ''; // Naslov kartice
  @Input() category: string = ''; // Kategorija (npr. "game", "movie")
  @Input() score: number = 0; // Score vrednost
  @Input() scoreText: string = ''; // Tekst ispod score-a
  @Input() reviews: number = 0; // Broj recenzija
  @Input() imageUrl: string = ''; // Slika kartice
  @Input() status: string = ''; // Status recenzije (npr. "Mixed", "Generally Favorable")

  // Metoda koja određuje boju na osnovu score vrednosti
  getBorderColor(): string {
    if (this.score >= 70) {
      return '#00ce7a'; // Zelena boja
    } else if (this.score >= 50) {
      return '#ffbd3f'; // Žuta boja
    } else {
      return '#ff6874'; // Crvena boja
    }
  }
}