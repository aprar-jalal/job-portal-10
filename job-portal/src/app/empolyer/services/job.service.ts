import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Job} from '../models/job.model'
@Injectable({
  providedIn: 'root'
})

export class JobService {
  constructor(private http: HttpClient) { }
  getJobs(): Observable<Job[]>
  {
    return this.http.get<Job[]>('http://127.0.0.1:8000/api/jobs')
  }

  getJobById(jobId: number): Observable<Job>
  {
    return this.http.get<Job>(`http://127.0.0.1:8000/api/jobs/${jobId}`);
  }

  postJob(job: Job): Observable<Job>
  {
    return this.http.post<Job>(`http://127.0.0.1:8000/api/jobs`, job);
  }

  deleteJob(jobId: number): Observable<any>{
    return this.http.delete(`http://127.0.0.1:8000/api/jobs/${jobId}`);
  }

  updateJob(jobId : number ,newJob: Job): Observable<any>
  {
    return this.http.put(`http://127.0.0.1:8000/api/jobs/${jobId}`, newJob);
  }
  //aprar start
  getAllJobs():Observable<Job[]>{
     return this.http.get<Job[]>('http://127.0.0.1:8000/api/allJobs');
  }

  GetJobByIdForDetails(jobId:number):Observable<Job>{
  return this.http.get<Job>(`http://127.0.0.1:8000/api/jobDetails/${jobId}`);  }

  //end
}
