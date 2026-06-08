import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Journalist } from '../models/journalist';

@Injectable({
  providedIn: 'root'
})
export class JournalistService {

  private apiUrl = 'http://localhost:8080/journalists';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Journalist[]> {
    return this.http.get<Journalist[]>(this.apiUrl);
  }

  getById(id: number): Observable<Journalist> {
    return this.http.get<Journalist>(`${this.apiUrl}/${id}`);
  }

  create(journalist: Journalist): Observable<Journalist> {
    return this.http.post<Journalist>(this.apiUrl, journalist);
  }

  update(id: number, journalist: Journalist): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, journalist);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
