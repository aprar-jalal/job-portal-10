import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RedirectGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const userType = localStorage.getItem('roleId') || '0';

    switch (userType) {
      case '2':
      case '0':
        this.router.navigate(['/home-page']);
        break;
      case '3':
        this.router.navigate(['/employer']);
        break;
      case '1':
        this.router.navigate(['/adminReports']);
        break;
      default:
        this.router.navigate(['/home-page']);
    }

    return false;
  }
}
