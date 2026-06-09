import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news';
import { News } from '../../../models/news';
import { ChangeDetectorRef } from '@angular/core';

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
  private cdr: ChangeDetectorRef
) {}

  ngOnInit(): void {

    this.newsService.getAll().subscribe({

    next: (data) => {

  this.newsList = data;

  console.log('newsList:', this.newsList);
  console.log('length:', this.newsList.length);

  this.cdr.detectChanges();

      },

      error: (err) => {

        console.error('ERRO:', err);

      },

      complete: () => {

        console.log('FINALIZOU');

      }

    });

  }
}
