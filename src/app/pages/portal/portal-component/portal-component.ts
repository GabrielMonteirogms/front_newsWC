import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news';
import { News } from '../../../models/news';
@Component({
  selector: 'app-portal-component',
  standalone: false,
  templateUrl: './portal-component.html',
  styleUrl: './portal-component.css'
})
export class PortalComponent implements OnInit {

  newsList: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getAll().subscribe({
      next: (data) => {
        console.log(data);
        this.newsList = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
