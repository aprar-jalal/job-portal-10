import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../../../empolyer/models/job.model';
import { FavoriteJob } from '../../models/FavaroteJob';
@Injectable({
  providedIn: 'root',
})
export class FavaroteJobService {
  constructor(private http: HttpClient) {}

  GetFavorateJobsForUSer(): Observable<Job[]> {
     const token = localStorage.getItem('authToken');
  const headers =new HttpHeaders().set('Authorization',`Bearer ${token}`);

    return this.http.get<Job[]>(`http://127.0.0.1:8000/api/user/GetFavorite `,{headers});
  }
  AddToFavarote(JobId: number, userId: number): Observable<FavoriteJob> {
        const token = localStorage.getItem('authToken');
   const headers =new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.post<FavoriteJob>(
      `http://127.0.0.1:8000/api/user/AddFavorite`,
      { job_id: JobId }, { headers } 
    );
  }

  deleteJobFromFavorite(JobId: number, userId: number): Observable<any> {
        const token = localStorage.getItem('authToken');
 const headers =new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.delete(
      `http://127.0.0.1:8000/api/user/RemoveFavorite`,
      { body: { job_id: JobId } , headers}
    );
    //delete can have body in som cases and in my case i used bpdy becase i want to know which job to delete
  }
}
