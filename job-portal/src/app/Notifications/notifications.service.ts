import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http: HttpClient) { }
  getNotifications():Observable<Notification[]> {

    return this.http.get<Notification[]>('http://127.0.0.1:8000/api/notifications/1');
  }
}
