import { Component } from '@angular/core';
import {NotificationComponent} from '../notification/notification.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notifications-inbox',
  standalone:true,
  imports: [
    NotificationComponent,
  ],
  templateUrl: './notifications-inbox.component.html',
  styleUrl: './notifications-inbox.component.css'
})
export class NotificationsInboxComponent {
  constructor(private router: Router) {}
  handleClick(){
    this.router.navigate(['/notifications-page']);
  }
}
