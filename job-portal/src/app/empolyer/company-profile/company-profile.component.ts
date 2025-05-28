import { Component } from '@angular/core';
import {ViewProfileComponent} from './view-profile/view-profile.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-company-profile',
  imports: [ViewProfileComponent, EditProfileComponent, NgIf],
  templateUrl: './company-profile.component.html',
  styleUrl: './company-profile.component.css'
})
export class CompanyProfileComponent {

  isEditMode = false;

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

}
