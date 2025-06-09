import {Component, Input} from '@angular/core';
import {NotificationComponent} from '../notification/notification.component';
import {Router} from '@angular/router';
import{NotificationModel} from '../models/notificatin.model';
import{NotificationsService} from '../notifications.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-notifications-inbox',
  standalone:true,
  imports: [
    NotificationComponent,
    NgForOf,
  ],
  templateUrl: './notifications-inbox.component.html',
  styleUrl: './notifications-inbox.component.css'
})
export class NotificationsInboxComponent {
  @Input('notification') NotificationModel:NotificationModel|undefined;
  Notifications:NotificationModel[] = [];
  constructor(private NotificationsService:NotificationsService,private router: Router) {}
  ngOnInit() {
    this.NotificationsService.getNotifications().subscribe((Notifications: any[])=>{
      this.Notifications=Notifications;
    })
  }
  handleClick(){
    this.router.navigate(['/notifications-page']);
  }
}
