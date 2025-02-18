import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../services/user.service';
import { GamesService } from '../services/games.service';
import { BlogService } from '../services/blog.service';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
  faSearch = faSearch;
  isLoggedIn = false;
  isAdmin = false;

  searchQuery: string = '';
  searchResults: any[] = [];
  showDropdown: boolean = false;

  menuItems = [
    { title: 'Games', link: '/games' },
    { title: 'Blog', link: '/blog' },
    { title: 'News', link: '/news' },
  ];

  constructor(
    private userService: UserService,
    private gamesService: GamesService,
    private blogService: BlogService,
    private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
      const user = this.userService.getCurrentUser();
      this.isAdmin = user?.role === 'admin';
    });
  }

  logout(): void {
    this.userService.logout();
  }

  onSearchInput(): void {
    if (this.searchQuery.trim().length === 0) {
      this.searchResults = [];
      this.showDropdown = false;
      return;
    }
  
    forkJoin({
      games: this.gamesService.searchGames(this.searchQuery),
      blogs: this.blogService.searchBlogs(this.searchQuery),
      news: this.newsService.searchNews(this.searchQuery)
    }).subscribe({
      next: ({ games, blogs, news }) => {
        this.searchResults = [
          ...games.map((g: any) => ({ ...g, type: 'game' })),
          ...blogs.map((b: any) => ({ ...b, type: 'blog' })),
          ...news.map((n: any) => ({ ...n, type: 'news' }))
        ];
        this.showDropdown = this.searchResults.length > 0;
      },
      error: (err) => {
        console.error('Search error:', err);
        this.showDropdown = false;
      }
    });
  }  

  onSearchClick(): void {
    this.onSearchInput();
  }

  onSearch(event: Event): void {
    event.preventDefault();
    this.onSearchInput();
  }

  navigateToResult(result: any): void {
    switch (result.type) {
      case 'game':
        this.router.navigate(['/games', result.id]);
        break;
      case 'blog':
        this.router.navigate(['/post', result.id]);
        break;
      case 'news':
        this.router.navigate(['/news', result.id]);
        break;
    }
    this.showDropdown = false;
    this.searchQuery = '';
  }
}