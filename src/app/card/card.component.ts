import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = ''; // Naslov kartice
  @Input() category: string = ''; // Kategorija (npr. "game", "movie")
  @Input() score: number = 0; // Metascore
  @Input() scoreText: string = ''; // Tekst ispod Metascore-a
  @Input() reviews: number = 0; // Broj recenzija
  @Input() imageUrl: string = ''; // Slika kartice
  @Input() status: string = ''; // Status recenzije (npr. "Mixed", "Generally Favorable")
  @Input() borderColor: string = '#000'; // Boja okvira kartice
}
