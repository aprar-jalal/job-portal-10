import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { LoginRequest, LoginResponse, User } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<any>(`${this.apiUrl}/log-in`, credentials)
      .pipe(
        map(response => {
         
          const user = new User(response.user.id, response.user.email);
          return new LoginResponse(response.message, user, response.token);
        })
      );
  }

  logout() {
    localStorage.removeItem('authToken');
   
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
