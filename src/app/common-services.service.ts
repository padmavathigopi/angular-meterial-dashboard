import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Testtable } from '../app/models/reports-table';
@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {
  private baseUrl = 'http://localhost:8080/api/testingtables/';

  constructor(private http: HttpClient) { }
  getAll(): Observable<Testtable[]> {
    return this.http.get<Testtable[]>(this.baseUrl);
    
  }

  get(id: any): Observable<Testtable> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id :any,data: any): Observable<Testtable> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id:number): Observable<Testtable> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  findByTitle(title: any): Observable<Testtable[]> {
    return this.http.get<Testtable[]>(`${this.baseUrl}?title=${title}`);
  }
}
