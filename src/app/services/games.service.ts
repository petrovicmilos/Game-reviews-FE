import { Injectable } from '@angular/core';

export interface Game {
  id: number;
  title: string;
  image: string;
  criticScore: number;
  audienceScore: number;
  text: string;
  releaseDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private games: Game[] = [
    {
      id: 1,
      title: 'Battlefield 1',
      criticScore: 95,
      audienceScore: 90,
      image: './assets/bf1.jpg',
      text: 'Battlefield 1 is a remarkable shooter that brings World War I to life with immersive environments and tactical gameplay.',
      releaseDate: 'Oct 21, 2016'
    },
    {
      id: 2,
      title: 'Cyberpunk 2077',
      criticScore: 85,
      audienceScore: 82,
      image: './assets/cyberpunk2077.jpg',
      text: 'Cyberpunk 2077 breathes new life into the futuristic RPG genre with an engaging story and rich world-building.',
      releaseDate: 'Dec 10, 2020'
    },
    {
      id: 3,
      title: 'God of War Ragnarok',
      criticScore: 94,
      audienceScore: 91,
      image: './assets/godofwar.jpg',
      text: 'God of War Ragnarok delivers an emotionally charged story, spectacular visuals, and refined combat.',
      releaseDate: 'Nov 09, 2022'
    },
    {
      id: 4,
      title: 'The Last of Us Part II',
      criticScore: 93,
      audienceScore: 85,
      image: './assets/lastofus.jpg',
      text: 'The Last of Us Part II pushes storytelling boundaries with a dark, emotional narrative.',
      releaseDate: 'Jun 19, 2020'
    },
    {
      id: 5,
      title: 'The Witcher 3',
      criticScore: 96,
      audienceScore: 92,
      image: './assets/witcher cover.jpg',
      text: 'The Witcher 3’s Blood and Wine expansion offers a captivating tale in a vibrant new region.',
      releaseDate: 'May 19, 2015'
    },
    {
      id: 6,
      title: 'Horizon Forbidden West',
      criticScore: 89,
      audienceScore: 87,
      image: './assets/horizon.jpg',
      text: 'Horizon Forbidden West improves on its predecessor with stunning visuals and refined mechanics.',
      releaseDate: 'Feb 18, 2022'
    },
    {
      id: 7,
      title: 'Resident Evil 4 Remake',
      criticScore: 91,
      audienceScore: 89,
      image: './assets/residentevil4.jpg',
      text: 'The Resident Evil 4 remake modernizes the classic game while preserving its survival horror essence.',
      releaseDate: 'Mar 24, 2023'
    },
    {
      id: 8,
      title: 'Starfield',
      criticScore: 84,
      audienceScore: 80,
      image: './assets/starfield.jpg',
      text: 'Starfield delivers a massive open-world sci-fi experience with an engaging story and exploration.',
      releaseDate: 'Sep 06, 2023'
    },
    {
      id: 9,
      title: 'Diablo IV',
      criticScore: 90,
      audienceScore: 88,
      image: './assets/diablo4.jpg',
      text: 'Diablo IV is a triumphant return to the franchise’s dark roots with addictive gameplay and deep lore.',
      releaseDate: 'Jun 06, 2023'
    },
    {
      id: 10,
      title: 'Final Fantasy XVI',
      criticScore: 88,
      audienceScore: 86,
      image: './assets/ffxvi.jpg',
      text: 'Final Fantasy XVI combines cinematic storytelling with thrilling combat, redefining the series for a new generation.',
      releaseDate: 'Jun 22, 2023'
    },
    {
      id: 11,
      title: 'Minecraft',
      criticScore: 92,
      audienceScore: 95,
      image: './assets/minecraft.jpg',
      text: 'Minecraft continues to inspire creativity, offering endless opportunities for construction and exploration.',
      releaseDate: 'Nov 18, 2011'
    },
    {
      id: 12,
      title: 'Overwatch 2',
      criticScore: 89,
      audienceScore: 84,
      image: './assets/overwatch2.jpg',
      text: 'Overwatch 2 introduces new heroes, maps, and modes while refining the classic team-based shooter.',
      releaseDate: 'Oct 04, 2022'
    },
    {
      id: 13,
      title: 'Apex Legends',
      criticScore: 88,
      audienceScore: 91,
      image: './assets/apexlegends.jpg',
      text: 'Apex Legends delivers tactical and fast-paced battle royale action with unique abilities for each character.',
      releaseDate: 'Feb 04, 2019'
    },
    {
      id: 14,
      title: 'Red Dead Redemption 2',
      criticScore: 97,
      audienceScore: 93,
      image: './assets/rdr2.jpg',
      text: 'Red Dead Redemption 2 offers an epic Wild West adventure with stunning realism and deep storytelling.',
      releaseDate: 'Oct 26, 2018'
    },
    {
      id: 15,
      title: 'The Elder Scrolls V: Skyrim',
      criticScore: 94,
      audienceScore: 91,
      image: './assets/skyrim.jpg',
      text: 'Skyrim is a legendary open-world RPG where players can explore, quest, and forge their own path.',
      releaseDate: 'Nov 11, 2011'
    },
    {
      id: 16,
      title: 'Fortnite',
      criticScore: 85,
      audienceScore: 88,
      image: './assets/fortnite.jpg',
      text: 'Fortnite continues to dominate with its unique art style and innovative battle royale gameplay.',
      releaseDate: 'Jul 21, 2017'
    },
    {
      id: 17,
      title: 'Call of Duty: Modern Warfare II',
      criticScore: 89,
      audienceScore: 85,
      image: './assets/codmwi.jpg',
      text: 'Modern Warfare II delivers tactical gameplay with thrilling multiplayer modes and cinematic single-player action.',
      releaseDate: 'Oct 28, 2022'
    },
    {
      id: 18,
      title: 'Sekiro: Shadows Die Twice',
      criticScore: 94,
      audienceScore: 88,
      image: './assets/sekiro.jpg',
      text: 'Sekiro challenges players with its brutal combat and beautiful, atmospheric setting.',
      releaseDate: 'Mar 22, 2019'
    },
    {
      id: 19,
      title: 'Super Mario Odyssey',
      criticScore: 97,
      audienceScore: 93,
      image: './assets/supermarioodyssey.jpg',
      text: 'Super Mario Odyssey offers a delightful and creative 3D platforming experience.',
      releaseDate: 'Oct 27, 2017'
    },
    {
      id: 20,
      title: 'Ghost of Tsushima',
      criticScore: 92,
      audienceScore: 89,
      image: './assets/ghostofthushima.jpg',
      text: 'Ghost of Tsushima offers a beautiful and immersive samurai journey set in feudal Japan.',
      releaseDate: 'Jul 17, 2020'
    }
  ];  
  

  getAllGames(): Game[] {
    return this.games;
  }

  getGameById(id: number): Game | undefined {
    return this.games.find((game) => game.id === id);
  }
}
