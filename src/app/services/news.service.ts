import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface News {
  id: number;
  title: string;
  image: string;
  content: string;
  publishedDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news: News[] = [
    {
      id: 1,
      title: "Best Black Friday gaming chair deal is still live at Best Buy and Corsair even after going out of stock at Amazon",
      image: "../../assets/news1_pic.png",
      content: "Don't let the PlayStation branding fool you, this excellent Razer headset is great on PC and $60 off for Black Friday.",
      publishedDate: "2024-12-10"
    },
    {
      id: 2,
      title: "Don't let the PlayStation branding fool you, this excellent Razer headset is great on PC and $60 off for Black Friday",
      image: "../../assets/news1_pic.png",
      content: "Don't panic: the best Black Friday gaming chair deal is still live at Best Buy and Corsair even after going out of stock at Amazon.",
      publishedDate: "2024-12-08"
    },
    {
      id: 3,
      title: "Don't panic: the best Black Friday gaming chair deal is still live at Best Buy and Corsair even after going out of stock at Amazon",
      image: "../../assets/news2_pic.png",
      content: "Bad news for skull-havers: The Skulltaker is here to take your skull in Total War: Warhammer 3's just-announced DLC.",
      publishedDate: "2024-12-05"
    },
    {
      id: 4,
      title: "Bad news for skull-havers: The Skulltaker is here to take your skull in Total War: Warhammer 3's just-announced DLC",
      image: "../../assets/news3_pic.png",
      content: "Best Cyber Monday gaming accessory deals.",
      publishedDate: "2024-10-05"
    },
    {
      id: 5,
      title: "Top gaming laptops to watch in 2025",
      image: "../../assets/news1_pic.png",
      content: "Here are the best gaming laptops expected to dominate in 2025.",
      publishedDate: "2024-11-20"
    },
    {
      id: 6,
      title: "Cyberpunk 2077 expansion Phantom Liberty continues to wow fans",
      image: "../../assets/news2_pic.png",
      content: "The expansion Phantom Liberty breathes new life into Cyberpunk 2077 with engaging gameplay and a fresh storyline.",
      publishedDate: "2024-11-18"
    },
    {
      id: 7,
      title: "Elden Ring DLC 'Shadow of the Erdtree' details revealed",
      image: "../../assets/news3_pic.png",
      content: "FromSoftware has revealed new details about the highly anticipated Elden Ring DLC.",
      publishedDate: "2024-11-12"
    },
    {
      id: 8,
      title: "Top 10 games of the year announced",
      image: "../../assets/news1_pic.png",
      content: "Discover the top 10 games of the year as chosen by critics and players alike.",
      publishedDate: "2024-12-01"
    },
    {
      id: 9,
      title: "Steam Winter Sale: Best deals revealed",
      image: "../../assets/news2_pic.png",
      content: "Valve has revealed the best deals for the Steam Winter Sale, with discounts on top titles.",
      publishedDate: "2024-12-15"
    },
    {
      id: 10,
      title: "The Witcher: Remake updates - Unreal Engine 5 showcase",
      image: "../../assets/news3_pic.png",
      content: "CD Projekt Red has provided new details about The Witcher Remake, showcasing stunning visuals in Unreal Engine 5.",
      publishedDate: "2024-12-14"
    }
  ];  

  getAllNews(): News[] {
    return this.news;
  }

  getNewsById(id: number): News | undefined {
    return this.news.find(newsItem => newsItem.id === id);
  }

  getRecentNews(): Observable<News[]> {
    return of(this.news.slice(0, 3)); // Return the latest 3 news
  }
}
