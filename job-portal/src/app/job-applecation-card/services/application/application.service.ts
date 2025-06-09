import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppliedJob } from '../../models/Application';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  constructor(private http: HttpClient) {}

  JobSeekerAppliesForJobs(JobId: number): Observable<any> {
     const token = localStorage.getItem('authToken');
   const headers =new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.post<AppliedJob>(
      `http://127.0.0.1:8000/api/user/applied`,
      { job_id: JobId },{headers}
    );
  }
}
