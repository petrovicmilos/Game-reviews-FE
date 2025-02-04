import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
  faSearch = faSearch;
  isLoggedIn = false;
  isAdmin = false;

  menuItems = [
    { title: 'Games', link: '/games' },
    { title: 'Blog', link: '/blog' },
    { title: 'News', link: '/news' },
  ];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Pratimo status prijave i automatski ažuriramo UI
    this.userService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
      const user = this.userService.getCurrentUser();
      this.isAdmin = user?.role === 'admin'; // Provera da li je korisnik admin
    });
  }

  logout(): void {
    this.userService.logout();
  }
}