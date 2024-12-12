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
      content: "Don't let the PlayStation branding fool you, this excellent Razer headset is great on PC and $60 off for Black Friday",
      publishedDate: "2024-12-10"
    },
    {
      id: 2,
      title: "Don't let the PlayStation branding fool you, this excellent Razer headset is great on PC and $60 off for Black Friday",
      image: "../../assets/news1_pic.png",
      content: "Don't panic: the best Black Friday gaming chair deal is still live at Best Buy and Corsair even after going out of stock at Amazon",
      publishedDate: "2024-12-08"
    },
    {
      id: 3,
      title: "Don't panic: the best Black Friday gaming chair deal is still live at Best Buy and Corsair even after going out of stock at Amazon",
      image: "../../assets/news2_pic.png",
      content: "Bad news for skull-havers: The Skulltaker is here to take your skull in Total War: Warhammer 3's just-announced DLC",
      publishedDate: "2024-12-05"
    },
    {
      id: 4,
      title: "Bad news for skull-havers: The Skulltaker is here to take your skull in Total War: Warhammer 3's just-announced DLC",
      image: "../../assets/news3_pic.png",
      content: "Best Cyber Monday gaming accessory deals.",
      publishedDate: "2024-10-05"
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
