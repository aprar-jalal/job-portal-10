import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  private currentUserType = 'employer';

  constructor() {
  }
  getUserType(): string {
    return this.currentUserType;
  }
}
