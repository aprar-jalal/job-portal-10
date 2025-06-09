import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserTypeService } from '../navbar/services/userType.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  constructor(
    private router: Router,
    private currentUserType: UserTypeService
  ) {}

  canActivate(): boolean {
    const userType = this.currentUserType.getUserType();

    switch (userType) {
      case 'jobSeeker':
      case 'guest':
        this.router.navigate(['/home-page']);
        break;
      case 'employer':
        this.router.navigate(['/employer']);
        break;
      case 'admin':
        this.router.navigate(['/adminReports']);
        break;
      default:
        this.router.navigate(['/home-page']);
    }

    return false;
  }
}
