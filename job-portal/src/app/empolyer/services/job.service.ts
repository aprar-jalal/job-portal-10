import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Job} from '../models/job.model'
@Injectable({
  providedIn: 'root'
})

export class JobService {
  constructor(private http: HttpClient) { }
  getJobs(): Observable<Job[]>
  {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get<Job[]>('http://127.0.0.1:8000/api/jobs', {headers});
  }

  getJobById(jobId: number): Observable<Job>
  {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get<Job>(`http://127.0.0.1:8000/api/jobs/${jobId}` , {headers});
  }

  postJob(job: Job): Observable<Job>
  {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.post<Job>(`http://127.0.0.1:8000/api/jobs`, job , {headers});
  }

  deleteJob(jobId: number): Observable<any>{
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.delete(`http://127.0.0.1:8000/api/jobs/${jobId}` , {headers});
  }

  updateJob(jobId : number ,newJob: Job): Observable<any>
  {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.put(`http://127.0.0.1:8000/api/jobs/${jobId}`, newJob, {headers});
  }
  //aprar start
  getAllJobs():Observable<Job[]>{
     return this.http.get<Job[]>('http://localhost:8000/api/allJobs');
  }

  GetJobByIdForDetails(jobId:number):Observable<Job>{
  return this.http.get<Job>(`http://127.0.0.1:8000/api/jobDetails/${jobId}`);  }

  //end
}
