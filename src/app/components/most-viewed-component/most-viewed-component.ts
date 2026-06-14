import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news';
import { News } from '../../models/news';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-most-viewed-component',
  standalone: false,
  templateUrl: './most-viewed-component.html',
  styleUrls: ['./most-viewed-component.css']
})
export class MostViewedComponent implements OnInit {

  mostViewedNews: News[] = [];

  constructor(
    private newsService: NewsService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {

    console.log('MOST VIEWED CARREGOU');

    this.newsService.getMostViewed().subscribe({

      next: (data) => {

        this.mostViewedNews = data;

        this.cdr.detectChanges();

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

  openNews(id: number): void {

    this.router.navigate(['/news', id]);

  }

}