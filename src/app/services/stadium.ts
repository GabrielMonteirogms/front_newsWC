import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stadium } from '../models/stadium';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  private apiUrl = 'http://localhost:8080/stadiums';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Stadium[]> {
    return this.http.get<Stadium[]>(this.apiUrl);
  }

  getById(id: number): Observable<Stadium> {
    return this.http.get<Stadium>(`${this.apiUrl}/${id}`);
  }

  create(stadium: Stadium): Observable<Stadium> {
    return this.http.post<Stadium>(this.apiUrl, stadium);
  }

  update(id: number, stadium: Stadium): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, stadium);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
