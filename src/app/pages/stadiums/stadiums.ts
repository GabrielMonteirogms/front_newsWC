import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NewsService } from '../../services/news';
import { News } from '../../models/news';

@Component({
  selector: 'app-stadiums',
  standalone: false,
  templateUrl: './stadiums.html',
  styleUrl: './stadiums.css'
})
export class StadiumsComponent implements OnInit {

   newsList: News[] = [];

  constructor(
    private newsService: NewsService,
    private cdr: ChangeDetectorRef   // ← adiciona isso
  ) {}

  ngOnInit(): void {
    this.newsService.getByCategory(3).subscribe({
      next: (data) => {
        console.log('STADIUMS RECEBEU:', data);
        this.newsList = data;
        this.cdr.detectChanges();    // ← força o Angular a re-renderizar
      },
      error: (err) => {
        console.error('ERRO:', err);
      }
    });
  }
}