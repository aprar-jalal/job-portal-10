import { Component, OnInit } from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from '@angular/common';
import {NotificationsInboxComponent} from '../Notifications/notifications-inbox/notifications-inbox.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  imports: [
    NgClass,
    NgForOf,
    NotificationsInboxComponent,
    NgOptimizedImage
  ],
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Placeholder for fetching dynamic data, e.g., team members
    // Example: this.teamService.getTeamMembers().subscribe(team => this.team = team);
  }
}
