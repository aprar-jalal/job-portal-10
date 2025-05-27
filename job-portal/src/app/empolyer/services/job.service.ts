import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Job} from '../models/job.model'
@Injectable({
  providedIn: 'root'
})

export class JobService {
  constructor(private http: HttpClient) { }
  getJobs(employerId:number): Observable<Job[]>
  {
    return this.http.get<Job[]>(`http://127.0.0.1:8000/api/employers/${employerId}/jobs`)
  }
  getJobById(jobId: number): Observable<Job>
  {
    return this.http.get<Job>(`http://127.0.0.1:8000/api/jobs/${jobId}`);
  }
}
