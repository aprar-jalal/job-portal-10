import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
  
export class SettingsComponent {
  profileForm = new FormGroup({
    fullName: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl(''),
    city: new FormControl(''),
    educationLevel: new FormControl(''),
    major: new FormControl(''),
    experienceYears: new FormControl(''),
    currentPassword: new FormControl(''),
    newPassword: new FormControl(''),
    confirmNewPassword: new FormControl(''),
  });

}
