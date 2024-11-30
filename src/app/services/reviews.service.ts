import { Injectable } from '@angular/core';

export interface Review {
  id: number;
  title: string;
  criticScore: number;
  audienceScore: number;
  image: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private reviews: Review[] = [
    {
      id: 1,
      title: 'Battlefield 1 - New Era in Action Games',
      criticScore: 95,
      audienceScore: 90,
      image: './assets/bf1.jpg',
      text: 'Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..'
    },
    {
      id: 2,
      title: 'Cyberpunk 2077 - Phantom Liberty DLC',
      criticScore: 85,
      audienceScore: 82,
      image: './assets/cyberpunk2077.jpg',
      text: 'The Phantom Liberty DLC breathes new life into Cyberpunk 2077 with an engaging story and improved gameplay mechanics.'
    },
    {
      id: 3,
      title: 'God of War Ragnarok - A Tale of Vengeance and Redemption',
      criticScore: 94,
      audienceScore: 91,
      image: './assets/godofwar.jpg',
      text: 'God of War Ragnarok delivers an emotionally charged story, spectacular visuals, and refined combat.'
    },
    {
      id: 4,
      title: 'The Last of Us Part II - A Controversial Masterpiece',
      criticScore: 93,
      audienceScore: 85,
      image: './assets/lastofus.jpg',
      text: 'The Last of Us Part II pushes storytelling boundaries with a dark, emotional narrative.'
    },
    {
      id: 5,
      title: 'The Witcher 3 - Blood and Wine DLC',
      criticScore: 96,
      audienceScore: 92,
      image: './assets/witcher cover.jpg',
      text: 'The Witcher 3’s Blood and Wine expansion offers a captivating tale in a vibrant new region.'
    },
    {
      id: 6,
      title: 'Horizon Forbidden West - A Visual Spectacle',
      criticScore: 89,
      audienceScore: 87,
      image: './assets/horizon.jpg',
      text: 'Horizon Forbidden West improves on its predecessor with stunning visuals and refined mechanics.'
    },
    {
      id: 7,
      title: 'Resident Evil 4 Remake - Survival Horror Refined',
      criticScore: 91,
      audienceScore: 89,
      image: './assets/residentevil4.jpg',
      text: 'The Resident Evil 4 remake modernizes the classic game while preserving its survival horror essence.'
    },
    {
      id: 8,
      title: 'Starfield - A New Frontier',
      criticScore: 84,
      audienceScore: 80,
      image: './assets/starfield.jpg',
      text: 'Starfield delivers a massive open-world sci-fi experience with an engaging story and exploration.'
    },
    {
      id: 9,
      title: 'Diablo IV - Return to Darkness',
      criticScore: 90,
      audienceScore: 88,
      image: './assets/diablo4.jpg',
      text: 'Diablo IV is a triumphant return to the franchise’s dark roots with addictive gameplay and deep lore.'
    },
    {
      id: 10,
      title: 'Final Fantasy XVI - A Cinematic RPG Experience',
      criticScore: 88,
      audienceScore: 86,
      image: './assets/ffxvi.jpg',
      text: 'Final Fantasy XVI combines cinematic storytelling with thrilling combat, redefining the series for a new generation.'
    }
  ];

  getAllReviews() {
    return this.reviews;
  }

  getReviewById(id: number) {
    return this.reviews.find((review) => review.id === id);
  }
}
