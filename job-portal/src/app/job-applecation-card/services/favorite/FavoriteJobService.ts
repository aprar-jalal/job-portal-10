import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../../../empolyer/models/job.model';
import { FavoriteJob } from '../../models/FavaroteJob';
@Injectable({
  providedIn: 'root',
})
export class FavaroteJobService {
  constructor(private http: HttpClient) {}

  GetFavorateJobsForUSer(userId: number): Observable<Job[]> {
    return this.http.get<Job[]>(`http://127.0.0.1:8000/api/user/${userId} `);
  }
  AddToFavarote(JobId: number, userId: number): Observable<FavoriteJob> {
    return this.http.post<FavoriteJob>(
      `http://127.0.0.1:8000/api/user/${userId}/Favorite`,
      { job_id: JobId }
    );
  }

  deleteJobFromFavorite(JobId: number, userId: number): Observable<any> {
    return this.http.delete(
      `http://127.0.0.1:8000/api/user/${userId}/Favorite`,
      { body: { job_id: JobId } }
    );
    //delete can have body in som cases and in my case i used bpdy becase i want to know which job to delete
  }
}
