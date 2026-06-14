import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../../../services/news';
import { News } from '../../../models/news';

@Component({
  selector: 'app-portal-component',
  standalone: false,
  templateUrl: './portal-component.html',
  styleUrls: ['./portal-component.css']
})
export class PortalComponent implements OnInit {

  newsList: News[] = [];

  constructor(
    private newsService: NewsService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.newsService.getAll().subscribe({

      next: (data) => {

        this.newsList = data.sort((a, b) => {

          if (a.featured !== b.featured) {
            return a.featured ? -1 : 1;
          }

          return b.views - a.views;

        });

        this.cdr.detectChanges();
      },

      error: (err) => {
        console.error('ERRO:', err);
      }

    });

  }

  openNews(id: number): void {
    this.router.navigate(['/news', id]);
  }

}