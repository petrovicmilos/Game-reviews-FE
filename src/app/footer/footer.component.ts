import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  menuItems = [
    { title: 'Reviews', link: '/reviews' },
    { title: 'Games', link: '/games' },
    { title: 'News', link: '/news' },
    { title: 'Videos', link: '/videos' }
  ];
}
