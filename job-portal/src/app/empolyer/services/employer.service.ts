import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employer} from '../models/employer.model'

@Injectable({
  providedIn: 'root'
})

export class EmployerService {
  constructor(private http: HttpClient) { }
  getEmployerById(employerId: number): Observable<Employer>
  {
    return this.http.get<Employer>(`http://127.0.0.1:8000/api/employers/${employerId}`);
  }
  updateEmployer(employerId: number, employer: Employer): Observable<Employer> {
      return this.http.put<Employer>
      (`http://127.0.0.1:8000/api/employers/${employerId}`, employer);
  }
}
