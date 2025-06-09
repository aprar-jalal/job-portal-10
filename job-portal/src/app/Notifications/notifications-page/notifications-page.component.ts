import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import { NotificationComponent } from '../notification/notification.component';
import{NotificationsService} from '../notifications.service';
import{NotificationModel} from '../models/notificatin.model';

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
  Notifications:NotificationModel[] = [];
  constructor(private NotificationsService:NotificationsService) {}
  ngOnInit() {
  this.NotificationsService.getNotifications().subscribe((Notifications: any[])=>{
    this.Notifications=Notifications;
})
  }
}

