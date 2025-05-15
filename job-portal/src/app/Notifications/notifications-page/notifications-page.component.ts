import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.css'],
  standalone: true,
  imports: [
    NotificationComponent,
    NgForOf,
    NgIf
  ]
})
export class NotificationsPageComponent {
  notifications = Array(5).fill(null);
}

