import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {NavbarComponent} from '../navbar/navbar.component';
import {NotificationComponent} from '../notification/notification.component';

@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.css'],
  imports: [
    NotificationComponent,
    NavbarComponent
  ]
})
export class NotificationsPageComponent {
  notifications = [
    { title: 'Notification 1', message: 'Message 1', timestamp: '2023-01-01' },
    { title: 'Notification 2', message: 'Message 2', timestamp: '2023-01-02' }
  ];
}
