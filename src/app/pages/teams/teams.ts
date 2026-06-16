import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NewsService } from '../../services/news';
import { News } from '../../models/news';

@Component({
  selector: 'app-teams',
  standalone: false,
  templateUrl: './teams.html',
  styleUrl: './teams.css'
})
export class TeamsComponent implements OnInit {

  newsList: News[] = [];

  constructor(
    private newsService: NewsService,
    private cdr: ChangeDetectorRef   // ← adiciona isso
  ) {}

  ngOnInit(): void {
    this.newsService.getByCategory(2).subscribe({
      next: (data) => {
        console.log('TEAMS RECEBEU:', data);
        this.newsList = data;
        this.cdr.detectChanges();    // ← força o Angular a re-renderizar
      },
      error: (err) => {
        console.error('ERRO:', err);
      }
    });
  }
}