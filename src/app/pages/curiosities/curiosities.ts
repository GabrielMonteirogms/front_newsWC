import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NewsService } from '../../services/news';
import { News } from '../../models/news';

@Component({
  selector: 'app-curiosities',
  standalone: false,
  templateUrl: './curiosities.html',
  styleUrl: './curiosities.css'
})
export class CuriositiesComponent implements OnInit {

  newsList: News[] = [];

  constructor(
    private newsService: NewsService,
    private cdr: ChangeDetectorRef   // ← adiciona isso
  ) {}

  ngOnInit(): void {
    this.newsService.getByCategory(4).subscribe({
      next: (data) => {
        console.log('CURIOSITIES RECEBEU:', data);
        this.newsList = data;
        this.cdr.detectChanges();    // ← força o Angular a re-renderizar
      },
      error: (err) => {
        console.error('ERRO:', err);
      }
    });
  }
}