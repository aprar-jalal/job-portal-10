import {Component, Input, input} from '@angular/core';
import { Router } from '@angular/router';
import {NotificationModel} from '../models/notificatin.model';


@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
@Input('notification') NotificationModel:NotificationModel|undefined;
  constructor(private router: Router,) {}
handleClick() {
  this.router.navigate(['/notifications-page']);
}

  protected readonly Notification = Notification;
}
