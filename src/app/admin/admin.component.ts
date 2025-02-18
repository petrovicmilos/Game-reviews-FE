import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GamesService } from '../services/games.service';
import { BlogService } from '../services/blog.service';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  activeTab: string = 'game';
  gameForm: FormGroup;
  blogForm: FormGroup;
  newsForm: FormGroup;
  selectedGameImage: File | null = null;
  selectedBlogImage: File | null = null;
  selectedNewsImage: File | null = null;

  constructor(
    private fb: FormBuilder,
    private gamesService: GamesService,
    private blogService: BlogService,
    private newsService: NewsService
  ) {
    this.gameForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      platforms: ['', Validators.required],
      releaseDate: ['', Validators.required],
      developer: ['', Validators.required],
      publisher: ['', Validators.required],
      genre: ['', Validators.required],
      image: [null]
    });

    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image: [null]
    });

    this.newsForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image: [null]
    });
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  onGameImageChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedGameImage = event.target.files[0];
      this.gameForm.patchValue({ image: this.selectedGameImage });
    }
  }

  onBlogImageChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedBlogImage = event.target.files[0];
      this.blogForm.patchValue({ image: this.selectedBlogImage });
    }
  }

  onNewsImageChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedNewsImage = event.target.files[0];
      this.newsForm.patchValue({ image: this.selectedNewsImage });
    }
  }

  submitGame() {
    const formData = new FormData();
    formData.append('title', this.gameForm.value.title);
    formData.append('description', this.gameForm.value.description);
    formData.append('platforms', this.gameForm.value.platforms);
    formData.append('releaseDate', this.gameForm.value.releaseDate);
    formData.append('developer', this.gameForm.value.developer);
    formData.append('publisher', this.gameForm.value.publisher);
    formData.append('genre', this.gameForm.value.genre);
    if (this.selectedGameImage) {
      formData.append('image', this.selectedGameImage);
    }

    this.gamesService.createGame(formData).subscribe(response => {
      alert('Game added successfully!');
      this.gameForm.reset();
    });
  }

  submitBlog() {
    const formData = new FormData();
    formData.append('title', this.blogForm.value.title);
    formData.append('content', this.blogForm.value.content);
    if (this.selectedBlogImage) {
      formData.append('image', this.selectedBlogImage);
    }

    this.blogService.createBlog(formData).subscribe(response => {
      alert('Blog created successfully!');
      this.blogForm.reset();
    });
  }

  submitNews() {
    const formData = new FormData();
    formData.append('title', this.newsForm.get('title')?.value);
    formData.append('content', this.newsForm.get('content')?.value);
    if (this.selectedNewsImage) {
      formData.append('image', this.selectedNewsImage);
    } else {
      formData.append('image', new Blob(), "");
    }

    formData.forEach((value, key) => {
      console.log(key, value);
    });    

    this.newsService.createNews(formData).subscribe(
      response => {
        alert('News created successfully!');
        this.newsForm.reset();
        this.selectedNewsImage = null;
      },
      (error) => {
        console.error('Error creating news:', error);
      }
    );
  }
}