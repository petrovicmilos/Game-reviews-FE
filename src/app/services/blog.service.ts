import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Blog {
  id: number;
  title: string;
  criticScore: number;
  audienceScore: number;
  image: string;
  text: string;
  postingDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blog: Blog[] = [
    {
      id: 1,
      title: 'Battlefield 1 - New Era in Action Games',
      criticScore: 95,
      audienceScore: 90,
      image: './assets/bf1.jpg',
      text: 'Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
      postingDate: '2024-12-10'
    },
    {
      id: 2,
      title: 'Cyberpunk 2077 - Phantom Liberty DLC',
      criticScore: 85,
      audienceScore: 82,
      image: './assets/cyberpunk2077.jpg',
      text: 'The Phantom Liberty DLC breathes new life into Cyberpunk 2077 with an engaging story and rich world-building.',
      postingDate: '2024-12-09'
    },
    {
      id: 3,
      title: 'God of War Ragnarok - A Tale of Vengeance and Redemption',
      criticScore: 94,
      audienceScore: 91,
      image: './assets/godofwar.jpg',
      text: 'God of War Ragnarok delivers an emotionally charged story, spectacular visuals, and refined combat.',
      postingDate: '2024-12-08'
    },
    {
      id: 4,
      title: 'The Last of Us Part II - A Controversial Masterpiece',
      criticScore: 93,
      audienceScore: 85,
      image: './assets/lastofus.jpg',
      text: 'The Last of Us Part II pushes storytelling boundaries with a dark, emotional narrative.',
      postingDate: '2024-12-07'
    },
    {
      id: 5,
      title: 'The Witcher 3 - Blood and Wine DLC',
      criticScore: 96,
      audienceScore: 92,
      image: './assets/witcher cover.jpg',
      text: 'The Witcher 3’s Blood and Wine expansion offers a captivating tale in a vibrant new region.',
      postingDate: '2024-12-06'
    },
    {
      id: 6,
      title: 'Horizon Forbidden West - A Visual Spectacle',
      criticScore: 89,
      audienceScore: 87,
      image: './assets/horizon.jpg',
      text: 'Horizon Forbidden West improves on its predecessor with stunning visuals and refined mechanics.',
      postingDate: '2024-12-05'
    },
    {
      id: 7,
      title: 'Resident Evil 4 Remake - Survival Horror Refined',
      criticScore: 91,
      audienceScore: 89,
      image: './assets/residentevil4.jpg',
      text: 'The Resident Evil 4 remake modernizes the classic game while preserving its survival horror essence.',
      postingDate: '2024-12-04'
    },
    {
      id: 8,
      title: 'Starfield - A New Frontier',
      criticScore: 84,
      audienceScore: 80,
      image: './assets/starfield.jpg',
      text: 'Starfield delivers a massive open-world sci-fi experience with an engaging story and exploration.',
      postingDate: '2024-12-03'
    },
    {
      id: 9,
      title: 'Diablo IV - Return to Darkness',
      criticScore: 90,
      audienceScore: 88,
      image: './assets/diablo4.jpg',
      text: 'Diablo IV is a triumphant return to the franchise’s dark roots with addictive gameplay and deep lore.',
      postingDate: '2024-12-02'
    },
    {
      id: 10,
      title: 'Final Fantasy XVI - A Cinematic RPG Experience',
      criticScore: 88,
      audienceScore: 86,
      image: './assets/ffxvi.jpg',
      text: 'Final Fantasy XVI combines cinematic storytelling with thrilling combat, redefining the series for a new generation.',
      postingDate: '2024-12-01'
    },
    {
      id: 11,
      title: 'Minecraft - Building Dreams in a Blocky World',
      criticScore: 92,
      audienceScore: 95,
      image: './assets/minecraft.jpg',
      text: 'Minecraft continues to inspire creativity, offering endless opportunities for construction and exploration in a procedurally generated world.',
      postingDate: '2024-11-30'
    },
    {
      id: 12,
      title: 'Overwatch 2 - Team-Based Combat at Its Best',
      criticScore: 89,
      audienceScore: 84,
      image: './assets/overwatch2.jpg',
      text: 'Overwatch 2 refines the team-based shooter formula, introducing new heroes and maps while maintaining the fast-paced action.',
      postingDate: '2024-11-29'
    },
    {
      id: 13,
      title: 'Apex Legends - Battle Royale Revolutionized',
      criticScore: 88,
      audienceScore: 91,
      image: './assets/apexlegends.jpg',
      text: 'Apex Legends delivers a thrilling and tactical battle royale experience with unique characters and abilities that elevate the genre.',
      postingDate: '2024-11-28'
    },
    {
      id: 14,
      title: 'Red Dead Redemption 2 - The Wild West Reborn',
      criticScore: 97,
      audienceScore: 93,
      image: './assets/rdr2.jpg',
      text: 'Red Dead Redemption 2 offers a breathtaking open-world experience, filled with detailed characters and a gripping story set in the final days of the Wild West.',
      postingDate: '2024-11-27'
    },
    {
      id: 15,
      title: 'The Elder Scrolls V: Skyrim - A Fantasy Epic',
      criticScore: 94,
      audienceScore: 91,
      image: './assets/skyrim.jpg',
      text: 'Skyrim offers an expansive world of dragons, magic, and adventure, allowing players to carve their own path in a rich fantasy universe.',
      postingDate: '2024-11-26'
    },
    {
      id: 16,
      title: 'Fortnite - The Battle Royale Phenomenon',
      criticScore: 85,
      audienceScore: 88,
      image: './assets/fortnite.jpg',
      text: 'Fortnite has become a cultural phenomenon with its fast-paced battle royale gameplay, constantly evolving through updates and events.',
      postingDate: '2024-11-25'
    },
    {
      id: 17,
      title: 'Call of Duty: Modern Warfare II - Tactical Warfare Reborn',
      criticScore: 89,
      audienceScore: 85,
      image: './assets/codmwi.jpg',
      text: 'Call of Duty: Modern Warfare II offers tactical, fast-paced gameplay with intense multiplayer modes and an exciting single-player campaign.',
      postingDate: '2024-11-24'
    },
    {
      id: 18,
      title: 'Sekiro: Shadows Die Twice - A Samurai Saga',
      criticScore: 94,
      audienceScore: 88,
      image: './assets/sekiro.jpg',
      text: 'Sekiro delivers a challenging action-adventure experience with precise combat, intricate world-building, and a deep storyline set in feudal Japan.',
      postingDate: '2024-11-23'
    },
    {
      id: 19,
      title: 'Super Mario Odyssey - The Ultimate 3D Adventure',
      criticScore: 97,
      audienceScore: 93,
      image: './assets/supermarioodyssey.jpg',
      text: 'Super Mario Odyssey offers a whimsical, yet challenging 3D platforming experience with creative levels and charming characters.',
      postingDate: '2024-11-22'
    },
    {
      id: 20,
      title: 'Ghost of Tsushima - A Samurai’s Journey',
      criticScore: 92,
      audienceScore: 89,
      image: './assets/ghostofthushima.jpg',
      text: 'Ghost of Tsushima offers a breathtaking open-world adventure set in feudal Japan, combining combat, exploration, and a gripping story.',
      postingDate: '2024-11-21'
    }
];



  getAllReviews() {
    return this.blog;
  }

  getReviewById(id: number) {
    return this.blog.find((blog) => blog.id === id);
  }

  getPostById(id: number): Observable<any> {
      const post = this.blog.find((post) => post.id === id);
      return of(post);
    }
}
