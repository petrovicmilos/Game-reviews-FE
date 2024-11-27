import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news = [
    {
      id: 1,
      image: "../../assets/news1_pic.png",
      title: "Best Black Friday gaming chair deal",
      content: "Don't let the PlayStation branding fool you, this excellent Razer headset is great on PC and $60 off for Black Friday"
    },
    {
      id: 2,
      image: "../../assets/news1_pic.png",
      title: "Don't let the PlayStation branding fool you, this excellent Razer headset is great on PC and $60 off for Black Friday",
      content: "Don't panic: the best Black Friday gaming chair deal is still live at Best Buy and Corsair even after going out of stock at Amazon"
    },
    {
      id: 3,
      image: "../../assets/news2_pic.png",
      title: "Don't panic: the best Black Friday gaming chair deal is still live at Best Buy and Corsair even after going out of stock at Amazon",
      content: "Bad news for skull-havers: The Skulltaker is here to take your skull in Total War: Warhammer 3's just-announced DLC"
    },
    {
      id: 4,
      image: "../../assets/news3_pic.png",
      title: "Bad news for skull-havers: The Skulltaker is here to take your skull in Total War: Warhammer 3's just-announced DLC",
      content: "Best Cyber Monday gaming accessory deals."
    }
  ];

  // Fetch all news
  getAllNews(): Observable<any[]> {
    return of(this.news);
  }

  // Fetch recent news (last 3 items)
  getRecentNews(): Observable<any[]> {
    return of(this.news.slice(-3)); // Poslednje tri vesti
  }

  // Fetch news by ID
  getNewsById(id: number): Observable<any> {
    const newsItem = this.news.find((item) => item.id === id);
    return of(newsItem);
  }
}
