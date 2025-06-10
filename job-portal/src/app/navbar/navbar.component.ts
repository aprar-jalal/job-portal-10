import {
  Component, HostListener, Inject, PLATFORM_ID, OnInit, ViewChildren, QueryList, ElementRef
} from '@angular/core';
import { isPlatformBrowser, NgClass, NgForOf, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NotificationsInboxComponent } from '../Notifications/notifications-inbox/notifications-inbox.component';

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
  isBrowser: boolean = false;
  navItems: { name: string; label: string; icon: string }[] = [];

  constructor(
      protected router: Router,
      @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    let userType = '0';
    if (this.isBrowser) {
      userType = localStorage.getItem('roleId') || '0';
    }
    this.setNavItems(userType);
  }

  get isLoggedIn(): boolean {
    return this.isBrowser && localStorage.getItem('roleId') !== '0';
  }

  public setNavItems(userType: string | null) {
    switch (userType) {
      case '0':
        this.navItems = [
          { name: 'home', label: 'Home', icon: 'bi bi-house' },
          { name: 'contact-us', label: 'Contact Us', icon: 'bi bi-envelope' },
          { name: 'about-us', label: 'About Us', icon: 'bi bi-info-circle' },
          { name: 'login', label: 'Login', icon: 'bi bi-box-arrow-in-right' },
        ];
        break;
      case '2':
        this.navItems = [
          { name: 'home', label: 'Home', icon: 'bi bi-house' },
          { name: 'favorites', label: 'Favorites', icon: 'bi bi-heart' },
          { name: 'notifications', label: 'Notifications', icon: 'bi bi-bell' },
          { name: 'me', label: 'Me', icon: 'bi bi-person' }
        ];
        break;
      case '3':
        this.navItems = [
          { name: 'home', label: 'Home', icon: 'bi bi-house' },
          { name: 'jobApplications', label: 'Job Applications', icon: 'bi bi-file-earmark-bar-graph' },
          { name: 'notifications', label: 'Notifications', icon: 'bi bi-bell' },
          { name: 'me', label: 'Me', icon: 'bi bi-person' }
        ];
        break;
      case '1':
        this.navItems = [
          { name: 'home', label: 'Home', icon: 'bi bi-house' },
          { name: 'dashboard', label: 'Dashboard', icon: 'bi-grid' },
          { name: 'adminReports', label: 'Reports', icon: 'bi bi-file-earmark-bar-graph' },
          { name: 'notifications', label: 'Notifications', icon: 'bi bi-bell' },
          { name: 'me', label: 'Me', icon: 'bi bi-person' }
        ];
        break;
      default:
        this.navItems = [
          { name: 'home', label: 'Home', icon: 'bi bi-house' }
        ];
    }
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

  @ViewChildren('dropdownRef') dropdownRefs!: QueryList<ElementRef>;

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    const clickedInside = this.dropdownRefs.some(ref => ref.nativeElement.contains(event.target));
    if (!clickedInside) {
      this.showNotificationsDropdown = false;
    }
  }


  handleLogout() {
    if (this.isBrowser) {
      localStorage.removeItem('token');
      localStorage.removeItem('roleId');
      localStorage.setItem('roleId', '0');
      this.setNavItems('0');
    }

    this.router.navigate(['login']);
  }

  setActive(item: string) {
    let userType = '0';
    if (this.isBrowser) {
      userType = localStorage.getItem('roleId') || '0';
    }

    // this.activeItem = 'home';

    if (item === 'notifications') {
      if (this.isMobileView) {
        this.router.navigate(['/notifications-page']);
        this.showNotificationsDropdown = false;
      } else {
        this.showNotificationsDropdown = !this.showNotificationsDropdown;
      }
    } else if (item === 'logout') {
      this.router.navigate(['/logout']);
    } else if (item === 'home') {
      this.router.navigate(['/']);
    } else if (item === 'me') {
      if (userType === '2') {
        this.router.navigate(['/job-seeker']);
      } else if (userType === '3') {
        this.router.navigate(['/companyProfile']);
      } else if (userType === '1') {
        this.router.navigate(['/admin']);
      }
    } else if (item === 'adminReports') {
      this.router.navigate(['/adminReports']);
    } else if (item === 'dashboard') {
      this.router.navigate(['/admin-dashboard']);
    } else if (item === 'jobApplications') {
      this.router.navigate(['/allJobApplications']);
    } else if (item === 'contact-us') {
      this.router.navigate(['/contact-us']);
    } else if (item === 'about-us') {
      this.router.navigate(['/about-us']);
    } else if (item === 'favorites') {
      this.router.navigate(['/favorites']);
    }
      else if (item === 'login'){
        this.router.navigate(['/login']);
      }
     else {
      this.showNotificationsDropdown = false;
    }

    this.activeItem = item;
  }
}
