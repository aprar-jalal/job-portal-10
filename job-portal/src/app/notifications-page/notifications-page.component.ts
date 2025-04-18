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
  ]
})
export class NotificationsPageComponent {

}
