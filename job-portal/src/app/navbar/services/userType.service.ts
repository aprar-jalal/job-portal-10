import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  private currentUserType = 'admin';
  constructor() {
  }
  getUserType(): string {
    return this.currentUserType;
  }
}
