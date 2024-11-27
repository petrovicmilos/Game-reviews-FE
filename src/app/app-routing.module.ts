import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PostComponent } from './post/post.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: '', component: HomepageComponent }, // Početna stranica
  { path: 'reviews', component: ReviewsComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'news/:id', component: NewsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
