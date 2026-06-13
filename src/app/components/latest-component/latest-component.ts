import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news';
import { News } from '../../models/news';
import { ChangeDetectorRef } from '@angular/core';

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
  private cdr: ChangeDetectorRef
) {}

 ngOnInit(): void {

  console.log('COMPONENTE CARREGOU');

  this.newsService.getLatest().subscribe({

  next: (data) => {

  this.latestNews = data;

  this.cdr.detectChanges();

}

  });

}

  }