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
    { title: 'Reviews', link: '/reviews' },
    { title: 'Games', link: '/games' },
    { title: 'News', link: '/news' },
    { title: 'Videos', link: '/videos' }
  ];
}
