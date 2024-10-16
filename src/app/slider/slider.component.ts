import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  cards = [
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
      title: 'Joker: Folie à Deux',
      category: 'game',
      score: 45,
      scoreText: 'Mixed or Average',
      reviews: 59,
      imageUrl: './assets/Silent Hill 2.jpg',
      status: 'Based on 59 Critic Reviews'
    },
    {
      title: 'The Franchise',
      category: 'game',
      score: 61,
      scoreText: 'Generally Favorable',
      reviews: 24,
      imageUrl: './assets/Silent Hill 2.jpg',
      status: 'Based on 24 Critic Reviews'
    },
    {
      title: 'The Franchise 2',
      category: 'game',
      score: 61,
      scoreText: 'Generally Favorable',
      reviews: 24,
      imageUrl: './assets/Silent Hill 2.jpg',
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
    }
  ];
}
