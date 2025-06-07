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
  return this.http.post<any>(`${this.apiUrl}/log-in`, credentials).pipe(
    map(response => {
      const token = response.token;
      const userData = response.user;

    
      localStorage.setItem('authToken', token);
console.log(token);
    
      const user = new User(userData.id, userData.email);
      return new LoginResponse(response.message, user, token);
    })
  );
}
  

  logout() {
    localStorage.removeItem('authToken');
   
  }


}
