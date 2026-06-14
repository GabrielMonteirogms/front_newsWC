import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news';
import { News } from '../../models/news';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-news-details',
  standalone: false,
  templateUrl: './new-details.html',
  styleUrls: ['./new-details.css'],
})
export class NewsDetailsComponent implements OnInit {
  news?: News;
  videoUrl?: SafeResourceUrl;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    console.log('ID RECEBIDO:', id);

    this.newsService.getById(id).subscribe({
      next: (data) => {

  this.news = data;

  if (data.videoUrl) {

    const embedUrl = data.videoUrl
      .replace('watch?v=', 'embed/')
      .replace('youtu.be/', 'youtube.com/embed/');

    this.videoUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);

  }

  this.cdr.detectChanges();

},

      error: (err) => {
        console.error('ERRO AO BUSCAR NOTÍCIA:', err);
      },
    });
  }
}
