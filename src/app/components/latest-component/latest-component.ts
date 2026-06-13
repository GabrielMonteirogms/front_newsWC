import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news';
import { News } from '../../models/news';

@Component({
  selector: 'app-latest-component',
  standalone: false,
  templateUrl: './latest-component.html',
  styleUrls: ['./latest-component.css']
})
export class LatestComponent implements OnInit {

  latestNews: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {

  this.newsService.getLatest().subscribe({

    next: (data) => {

      console.log('CHEGOU:', data);

      this.latestNews = data;

    },

    error: (err) => {

      console.error('ERRO:', err);

    }

  });

  }}