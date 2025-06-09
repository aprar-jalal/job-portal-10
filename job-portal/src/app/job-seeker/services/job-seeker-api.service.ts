import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobSeekerApiService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  private getAuthHeaders() {
    const token = localStorage.getItem('authToken') || localStorage.getItem('auth_token') || localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getJobSeekerProfile() {
    return this.http.get(`${this.baseUrl}/jobseeker/profile`, {
      headers: this.getAuthHeaders()
    });
  }

  updateJobSeekerProfile(data: any) {
    return this.http.post(`${this.baseUrl}/jobseeker/profile`, data, {
      headers: this.getAuthHeaders()
    });
  }

  uploadProfilePicture(formData: FormData) {
    return this.http.post<{ message: string, path: string }>(
      `${this.baseUrl}/jobseeker/upload-profile-picture`, formData, {
        headers: this.getAuthHeaders()
      });
  }

  uploadBackgroundPicture(formData: FormData) {
    return this.http.post<{ message: string, path: string }>(
      `${this.baseUrl}/jobseeker/upload-background-picture`, formData, {
        headers: this.getAuthHeaders()
      });
  }

  getAppliedJobs() {
    return this.http.get(`${this.baseUrl}/jobseeker/applied-jobs`, {
      headers: this.getAuthHeaders()
    });
  }

  deleteAppliedJob(jobId: number) {
    return this.http.delete(`${this.baseUrl}/jobseeker/applied/${jobId}`, {
      headers: this.getAuthHeaders()
    });
  }

  getFavoriteJobs() {
    return this.http.get(`${this.baseUrl}/jobseeker/favorite-jobs`, {
      headers: this.getAuthHeaders()
    });
  }

  removeFavoriteJob(jobId: number) {
    return this.http.delete(`${this.baseUrl}/jobseeker/favorite/${jobId}`, {
      headers: this.getAuthHeaders()
    });
  }
  
  changePassword(data: any) {
    return this.http.post(`${this.baseUrl}/jobseeker/change-password`, data, {
      headers: this.getAuthHeaders()
    });
  }
  
  uploadResume(formData: FormData) {
    return this.http.post<{ message: string, path: string }>(
      `${this.baseUrl}/jobseeker/upload-resume`, formData, {
        headers: this.getAuthHeaders()
      });
  }
  
}
