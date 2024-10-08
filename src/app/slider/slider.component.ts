import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  cards = [
    {
      title: 'Undisputed',
      category: 'game',
      score: 72,
      scoreText: 'Mixed or Average',
      reviews: 12,
      imageUrl: './assets/undisputed.jpg',
      status: 'Based on 12 Critic Reviews',
      borderColor: 'orange'
    },
    {
      title: 'Diablo IV: Vessel of Hatred',
      category: 'game',
      score: 85,
      scoreText: 'Generally Favorable',
      reviews: 34,
      imageUrl: './assets/diablo.jpg',
      status: 'Based on 34 Critic Reviews',
      borderColor: 'green'
    },
    {
      title: 'Joker: Folie à Deux',
      category: 'movie',
      score: 45,
      scoreText: 'Mixed or Average',
      reviews: 59,
      imageUrl: './assets/joker.jpg',
      status: 'Based on 59 Critic Reviews',
      borderColor: 'yellow'
    },
    {
      title: 'The Franchise',
      category: 'tv show',
      score: 61,
      scoreText: 'Generally Favorable',
      reviews: 24,
      imageUrl: './assets/franchise.jpg',
      status: 'Based on 24 Critic Reviews',
      borderColor: 'blue'
    }
  ];

  currentIndex = 0;

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextCard() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
    }
  }
}
