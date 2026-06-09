import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news';
import { News } from '../../models/news';

@Component({
  selector: 'app-featured-news-components',
  standalone: false,
  templateUrl: './featured-news-components.html',
  styleUrls: ['./featured-news-components.css']
})
export class FeaturedNewsComponents implements OnInit {

  featuredNews: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {

    this.newsService.getFeatured().subscribe({
      next: (data) => {
        this.featuredNews = data;
      },
      error: (err) => {
        console.error(err);
      }
    });

  }

}
