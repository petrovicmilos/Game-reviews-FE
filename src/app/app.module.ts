import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './button/button.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BannerMenuComponent } from './banner-menu/banner-menu.component';
import { TrendingComponent } from './trending/trending.component';
import { LatestReviewsComponent } from './latest-reviews/latest-reviews.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ButtonComponent,
    BannerComponent,
    CardComponent,
    HomepageComponent,
    BannerMenuComponent,
    TrendingComponent,
    LatestReviewsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
