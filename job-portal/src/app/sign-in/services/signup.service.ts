import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpModel } from '../models/sign-up.model';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'http://localhost:8000/api'; 

  constructor(private http: HttpClient) {}

  register(user: SignUpModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-up`, user);
  }
}
