import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employer} from '../models/employer.model'

@Injectable({
  providedIn: 'root'
})

export class EmployerService {
  constructor(private http: HttpClient) { }
  getEmployerInfo(): Observable<Employer>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Employer>('http://127.0.0.1:8000/api/employer', { headers });

  }
  updateEmployer(employer: any): Observable<any> {

    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json');

    return this.http.put<any>('http://127.0.0.1:8000/api/employer', employer, { headers });
  }
}
