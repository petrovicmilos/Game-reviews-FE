import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  private trendingPosts = [
    {
      id: 1,
      title: "The Witcher 3: Blood & Wine - Best Endings",
      image: "../../assets/witcher_cover.jpg",
      content: "Detailed walkthrough of The Witcher 3 Blood & Wine best endings.",
      views: 1000,
      likes: 250,
      comments: 45
    },
    {
      id: 2,
      title: "Cyberpunk 2077 - Phantom Liberty Preview",
      image: "../../assets/cyberpunk2077.jpg",
      content: "Everything you need to know about Phantom Liberty.",
      views: 750,
      likes: 200,
      comments: 30
    },
    {
      id: 3,
      title: "Elden Ring DLC: Shadow of the Erdtree",
      image: "../../assets/eldenring.jpg",
      content: "Speculations and leaks about Elden Ring's first DLC.",
      views: 600,
      likes: 180,
      comments: 20
    },
    {
      id: 4,
      title: "God of War Ragnarok Tips & Tricks",
      image: "../../assets/godofwar.jpg",
      content: "Master the realm with these tips for God of War Ragnarok.",
      views: 500,
      likes: 150,
      comments: 25
    },
    {
      id: 5,
      title: "Horizon Forbidden West - DLC Explained",
      image: "../../assets/horizon.jpg",
      content: "Everything you need to know about Horizon Forbidden West's latest DLC.",
      views: 400,
      likes: 120,
      comments: 15
    },
    {
      id: 6,
      title: "Assassin's Creed Mirage - Hidden Features",
      image: "../../assets/assassins_creed.jpg",
      content: "Discover hidden features in Assassin's Creed Mirage.",
      views: 300,
      likes: 90,
      comments: 10
    }
  ];


  // Fetch trending posts
  getTrendingPosts(): Observable<any[]> {
    return of(this.trendingPosts);
  }

  // Fetch post by ID
  getPostById(id: number): Observable<any> {
    const post = this.trendingPosts.find((post) => post.id === id);
    return of(post);
  }
}
