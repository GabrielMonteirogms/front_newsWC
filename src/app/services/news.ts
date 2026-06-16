import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'http://localhost:8080/news';

  constructor(private http: HttpClient) {}

  getAll(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }

  getById(id: number): Observable<News> {
    return this.http.get<News>(`${this.apiUrl}/${id}`);
  }

  getFeatured(): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiUrl}/featured`);
  }

  getLatest(): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiUrl}/latest`);
  }

  getMostViewed(): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiUrl}/most-viewed`);
  }

 getByCategory(id: number) {
  return this.http.get<News[]>(
    `http://localhost:8080/news/category/${id}`
  );
}

  getByJournalist(id: number): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiUrl}/journalist/${id}`);
  }

  getByStadium(id: number): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiUrl}/stadium/${id}`);
  }

  create(news: News): Observable<News> {
    return this.http.post<News>(this.apiUrl, news);
  }

  update(id: number, news: News): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, news);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
