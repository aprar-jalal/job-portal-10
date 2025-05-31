import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Job } from '../../../empolyer/models/job.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuerySubject = new BehaviorSubject<string>('');
  searchQuery$ = this.searchQuerySubject.asObservable();

  constructor(private http: HttpClient) {}

  // Emit new search queries here
  setSearchQuery(query: string): void {
    this.searchQuerySubject.next(query);
  }

  // Call your API to get search results
  searchJobs(query: string): Observable<Job[]> {
    return this.http.get<Job[]>(`http://127.0.0.1:8000/api/search?query=${query}`);
  }
}
