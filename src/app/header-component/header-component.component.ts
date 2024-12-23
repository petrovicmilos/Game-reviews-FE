import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent {
  faSearch = faSearch;

  menuItems = [
    { title: 'Games', link: '/games' },
    { title: 'Blog', link: '/blog' },
    { title: 'News', link: '/news' },
  ];
}
