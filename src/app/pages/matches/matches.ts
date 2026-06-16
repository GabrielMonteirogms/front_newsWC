import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NewsService } from '../../services/news';
import { News } from '../../models/news';

@Component({
  selector: 'app-matches',
  standalone: false,
  templateUrl: './matches.html',
  styleUrl: './matches.css'
})
export class MatchesComponent implements OnInit {

  newsList: News[] = [];

  constructor(
    private newsService: NewsService,
    private cdr: ChangeDetectorRef   // ← adiciona isso
  ) {}

  ngOnInit(): void {
    this.newsService.getByCategory(1).subscribe({
      next: (data) => {
        console.log('MATCHES RECEBEU:', data);
        this.newsList = data;
        this.cdr.detectChanges();    // ← força o Angular a re-renderizar
      },
      error: (err) => {
        console.error('ERRO:', err);
      }
    });
  }
}