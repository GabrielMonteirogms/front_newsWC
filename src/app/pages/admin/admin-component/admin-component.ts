import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-component',
  standalone: false,
  templateUrl: './admin-component.html',
  styleUrls: ['./admin-component.css']
})
export class AdminComponent implements OnInit {

  newsList: any[] = [];

  isEditMode = false;

  news = {
    id: null,
    title: '',
    summary: '',
    content: '',
    imageUrl: '',
    featured: false,
    views: 0,
    categoryId: null,
    journalistId: null,
    stadiumId: null
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews() {
    this.http.get<any[]>('http://localhost:8080/news')
      .subscribe(data => this.newsList = data);
  }

  save() {

    if (this.isEditMode) {
      this.http.put(`http://localhost:8080/news/${this.news.id}`, this.news)
        .subscribe(() => {
          this.reset();
          this.loadNews();
        });
    } else {
      this.http.post('http://localhost:8080/news', this.news)
        .subscribe(() => {
          this.reset();
          this.loadNews();
        });
    }
  }

  edit(news: any) {
    this.news = { ...news };
    this.isEditMode = true;
  }

  reset() {
    this.news = {
      id: null,
      title: '',
      summary: '',
      content: '',
      imageUrl: '',
      featured: false,
      views: 0,
      categoryId: null,
      journalistId: null,
      stadiumId: null
    };
    this.isEditMode = false;
  }
  deleteNews(id: number) {
  if (!confirm('Tem certeza que deseja deletar esta notícia?')) return;

  this.http.delete(`http://localhost:8080/news/${id}`)
    .subscribe({
      next: () => {
        this.loadNews(); // atualiza lista
      },
      error: (err) => {
        console.error('Erro ao deletar notícia:', err);
      }
    });
}
}
