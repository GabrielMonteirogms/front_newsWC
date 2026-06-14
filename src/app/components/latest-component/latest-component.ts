import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news';
import { News } from '../../models/news';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest-component',
  standalone: false,
  templateUrl: './latest-component.html',
  styleUrls: ['./latest-component.css']
})
export class LatestComponent implements OnInit {

  latestNews: News[] = [];

  constructor(
    private newsService: NewsService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {

    console.log('COMPONENTE CARREGOU');

    this.newsService.getLatest().subscribe({

      next: (data) => {

        this.latestNews = data;

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