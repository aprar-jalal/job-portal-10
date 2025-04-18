import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import {isPlatformBrowser, NgClass, NgForOf, NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {NotificationsInboxComponent} from '../notifications-inbox/notifications-inbox.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [
    NotificationsInboxComponent,
    NgClass,
    NgIf,
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activeItem: string = 'home';
  showNotificationsDropdown: boolean = false;
  isMobileView: boolean = false;
  private isBrowser: boolean = false;

  navItems = [
    { name: 'home', label: 'Home', icon: 'bi bi-house' },
    { name: 'favorites', label: 'Favorites', icon: 'bi bi-heart' },
    { name: 'reports', label: 'Reports', icon: 'bi bi-file-earmark-bar-graph' },
    { name: 'notifications', label: 'Notifications', icon: 'bi bi-bell' },
    { name: 'me', label: 'Me', icon: 'bi bi-person' }
  ];

  constructor(
    protected router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.checkViewport();
    }
  }

  @HostListener('window:resize')
  checkViewport() {
    if (this.isBrowser) {
      this.isMobileView = window.innerWidth < 990;
    }
  }

  setActive(item: string) {
    if (item === 'notifications') {

      if (this.isMobileView) {
        this.router.navigate(['/notifications-page']);
        this.showNotificationsDropdown = false;
      }
      else {
        this.showNotificationsDropdown = !this.showNotificationsDropdown;
      }
    }
    else if(item === 'home'){
      this.router.navigate(['/']);

    }else if(item === 'me'){
      this.router.navigate(['/job-seeker']);
    }
    // else if(item === 'favorites'){
    //   this.router.navigate(['/favorites-page']);
    // }
    // else if(item === 'reports'){
    //   this.router.navigate(['/reports-page']);
    // }
    else {
      this.showNotificationsDropdown = false;
    }
    this.activeItem = item;
  }
}
