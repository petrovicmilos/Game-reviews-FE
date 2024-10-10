import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  cards = [
    {
      title: 'Metaphor: ReFantazio',
      category: 'game',
      score: 94,
      scoreText: 'Generally Favorable',
      reviews: 36,
      imageUrl: './assets/Metaphor ReFantazio.jpg',
      status: 'Based on 36 Critic Reviews'
    },
    {
      title: 'Dragon Ball: Sparking! Zero',
      category: 'Arena Fighter',
      score: 83,
      scoreText: 'Mixed or Average',
      reviews: 55,
      imageUrl: './assets/Dragon Ball Sparking Zero.jpg',
      status: 'Based on 55 Critic Reviews'
    },
    {
      title: 'Diablo IV: Vessel of Hatred',
      category: 'Action role-playing',
      score: 85,
      scoreText: 'Generally Favorable',
      reviews: 34,
      imageUrl: './assets/Diablo IV.jpg',
      status: 'Based on 34 Critic Reviews'
    },
    {
      title: 'Silent Hill 2',
      category: 'Survival horror',
      score: 87,
      scoreText: 'Mixed or Average',
      reviews: 12,
      imageUrl: './assets/Silent Hill 2.jpg',
      status: 'Based on 12 Critic Reviews'
    },
    {
      title: 'Phoenix Springs',
      category: 'game',
      score: 74,
      scoreText: 'Generally Favorable',
      reviews: 24,
      imageUrl: './assets/Phoenix Springs.jpg',
      status: 'Based on 24 Critic Reviews'
    },
    {
      title: 'NHL 25',
      category: 'game',
      score: 67,
      scoreText: 'Generally Favorable',
      reviews: 24,
      imageUrl: './assets/NHL 25_2.jpg',
      status: 'Based on 24 Critic Reviews'
    },
    {
      title: 'Cyberpunk 2077',
      category: 'RPG',
      score: 75,
      scoreText: 'Generally Favorable',
      reviews: 78,
      imageUrl: './assets/cyberpunk.jpg',
      status: 'Based on 78 Critic Reviews'
    },
    {
      title: 'The Witcher 3',
      category: 'RPG',
      score: 93,
      scoreText: 'Overwhelmingly Positive',
      reviews: 90,
      imageUrl: './assets/witcher3.jpg',
      status: 'Based on 90 Critic Reviews'
    },
    {
      title: 'God of War',
      category: 'Action',
      score: 88,
      scoreText: 'Generally Favorable',
      reviews: 65,
      imageUrl: './assets/godofwar.jpg',
      status: 'Based on 65 Critic Reviews'
    },
    {
      title: 'Elden Ring',
      category: 'Action RPG',
      score: 95,
      scoreText: 'Universal Acclaim',
      reviews: 100,
      imageUrl: './assets/eldenring.jpg',
      status: 'Based on 100 Critic Reviews'
    },
    {
      title: 'The Last of Us Part II',
      category: 'Action',
      score: 92,
      scoreText: 'Universal Acclaim',
      reviews: 120,
      imageUrl: './assets/lastofus.jpg',
      status: 'Based on 120 Critic Reviews'
    },
    {
      title: 'Elden Ring',
      category: 'Action RPG',
      score: 95,
      scoreText: 'Universal Acclaim',
      reviews: 100,
      imageUrl: './assets/eldenring.jpg',
      status: 'Based on 100 Critic Reviews'
    },
    {
      title: 'Elden Ring',
      category: 'Action RPG',
      score: 95,
      scoreText: 'Universal Acclaim',
      reviews: 100,
      imageUrl: './assets/eldenring.jpg',
      status: 'Based on 100 Critic Reviews'
    }
  ];

  itemsPerPage = 4; // Broj kartica po prikazu
  currentIndex = 0; // Trenutni početni indeks prikaza

  // Funkcija za prebacivanje na sledeću grupu kartica
  nextCard() {
    if (this.currentIndex + this.itemsPerPage < this.cards.length) {
      this.currentIndex += this.itemsPerPage;
    }
  }

  // Funkcija za prebacivanje na prethodnu grupu kartica
  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.itemsPerPage;
    }
  }

  // Metoda za dodavanje klase na osnovu trenutnog index-a
  getArrowClass(direction: 'left' | 'right'): string {
    if (direction === 'left' && this.currentIndex === 0) {
      return 'inactive'; // Leva strelica je neaktivna ako smo na početnoj grupi
    } else if (direction === 'right' && this.currentIndex + this.itemsPerPage >= this.cards.length) {
      return 'inactive'; // Desna strelica je neaktivna ako smo na poslednjoj grupi
    } else {
      return 'active'; // Inače je strelica aktivna
    }
  }
}
