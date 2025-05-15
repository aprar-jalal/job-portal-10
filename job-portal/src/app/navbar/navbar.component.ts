import {Component, HostListener, Inject, PLATFORM_ID, OnInit, ViewChildren, QueryList, ElementRef} from '@angular/core';
import {isPlatformBrowser, NgClass, NgForOf, NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {NotificationsInboxComponent} from '../Notifications/notifications-inbox/notifications-inbox.component';
import { UserTypeService}  from './services/userType.service';
import {AllJobApplicationsComponent} from '../empolyer/all-job-applications/all-job-applications.component'
interface UserService {
  getUserType(): 'guest' | 'jobSeeker' | 'employer' | 'admin';
}

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
  navItems: { name: string; label: string; icon: string }[] = [];

  constructor(
    protected router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(UserTypeService) private userTypeService: UserTypeService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    const userType = this.userTypeService.getUserType();
    this.setNavItems(userType);
  }

  private getUserTypePlaceholder(): 'guest' | 'jobSeeker' | 'employer' | 'admin' {
    return 'guest';
  }

  private setNavItems(userType: string) {
    switch (userType) {
      case 'guest':
        this.navItems = [
          { name: 'home', label: 'Home', icon: 'bi bi-house' },
          { name: 'contact-us', label: 'Contact Us', icon: 'bi bi-envelope' },
          { name: 'about-us', label: 'About Us', icon: 'bi bi-info-circle' },
          { name: 'login', label: 'Login', icon: 'bi bi-box-arrow-in-right' }
        ];
        break;
      case 'jobSeeker':
        this.navItems = [
          { name: 'home', label: 'Home', icon: 'bi bi-house' },
          { name: 'favorites', label: 'Favorites', icon: 'bi bi-heart' },
          { name: 'notifications', label: 'Notifications', icon: 'bi bi-bell' },
          { name: 'me', label: 'Me', icon: 'bi bi-person' }
        ];
        break;
      case 'employer':
        this.navItems = [
          { name: 'home', label: 'Home', icon: 'bi bi-house' },
          { name: 'jobApplications', label: 'Job Applications', icon: 'bi bi-file-earmark-bar-graph' },
          { name: 'notifications', label: 'Notifications', icon: 'bi bi-bell' },
          { name: 'me', label: 'Me', icon: 'bi bi-person' }
        ]; break;
      case 'admin':
        this.navItems = [
          { name: 'home', label: 'Home', icon: 'bi bi-house' },
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
  setActive(item: string) {
    const userType = this.userTypeService.getUserType();

    if (item === 'notifications') {
      if (this.isMobileView) {
        this.router.navigate(['/notifications-page']);
        this.showNotificationsDropdown = false;
      } else {
        this.showNotificationsDropdown = !this.showNotificationsDropdown;
      }

    }
    else if (item === 'home') {
      this.router.navigate(['/']);
    }
    else if (item === 'me') {
      if (userType === 'jobSeeker') {
        this.router.navigate(['/job-seeker']);
      } else if (userType === 'employer') {
        this.router.navigate(['/employer']);
      } else if (userType === 'admin') {
        this.router.navigate(['/admin']);
      }
    } else if (item === 'adminReports') {
      if (userType === 'admin') {
        this.router.navigate(['/adminReports']);
      }
    }
   else if (item === 'jobApplications'){
       this.router.navigate(['/allJobApplications']);
   }
     else if (item === 'contact-us') {
      this.router.navigate(['/contact-us']);
    }
     else if (item === 'about-us') {
      this.router.navigate(['/about-us']);
    }
     else if (item === 'login') {
      this.router.navigate(['/login']);
    }
     else if (item === 'favorites') {
      this.router.navigate(['/favorites']);
    }
     else {
      this.showNotificationsDropdown = false;
    }
    this.activeItem = item;
  }
}
