import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, map, tap} from 'rxjs';

import { SignInRequest, SignInResponse } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  signIn(data: SignInRequest): Observable<SignInResponse> {
    return this.http.post<SignInResponse>(`${this.apiUrl}/log-in`, data).pipe(
    tap((response: SignInResponse) => {
      localStorage.setItem('authToken', response.authToken);
      localStorage.setItem('roleId', response.user.role_id.toString());
    })
  );
  }
}
