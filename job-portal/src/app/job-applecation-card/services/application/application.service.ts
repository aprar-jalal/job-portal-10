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


  //Mohammad
  displayApplicationsForEmployer(): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers =new HttpHeaders().set('Authorization',`Bearer ${token}`);

    return this.http.get<AppliedJob>('http://127.0.0.1:8000/api/applications', {headers});
  }

  getApplicationAndJobDetails(id:number): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers =new HttpHeaders().set('Authorization',`Bearer ${token}`);

    return this.http.get<AppliedJob>(`http://127.0.0.1:8000/api/applications/${id}/job`, {headers})
  }

  getJobSeekerDetailsFromApplication(id:number): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers =new HttpHeaders().set('Authorization',`Bearer ${token}`);

    return this.http.get<AppliedJob>(`http://127.0.0.1:8000/api/applications/${id}/jobSeeker`, {headers})
  }

  updateApplicationStatus(id:number ,newStatus:string): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers =new HttpHeaders().set('Authorization',`Bearer ${token}`);

    return this.http.put<AppliedJob>(`http://127.0.0.1:8000/api/applications/${id}`,  { application_status: newStatus }, { headers });
  }

}
