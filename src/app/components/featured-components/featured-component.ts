import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news';
import { News } from '../../models/news';

@Component({
  selector: 'app-featured-component',
  standalone: false,
  templateUrl: './featured-component.html',
  styleUrls: ['./featured-component.css']
})
export class FeaturedComponent implements OnInit {

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
