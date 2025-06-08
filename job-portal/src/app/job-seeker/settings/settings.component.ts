import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { JobSeekerApiService } from '../services/job-seeker-api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
  
export class SettingsComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl(''),
    city: new FormControl(''),
    educationLevel: new FormControl(''),
    major: new FormControl(''),
    experienceYears: new FormControl(''),
    currentPassword: new FormControl(''),
    newPassword: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
  
  

  constructor(private jobSeekerApi: JobSeekerApiService, private router: Router) { }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.jobSeekerApi.getJobSeekerProfile().subscribe({
      next: (data: any) => {
        if (!data || !data.job_seeker) {
          console.error('Invalid profile data');
          return;
        }

        const jobSeeker = data.job_seeker;
        const user = data.user;

        const fullName = (jobSeeker.first_name || '') + ' ' + (jobSeeker.last_name || '');

        this.profileForm.patchValue({
          firstName: jobSeeker.first_name || '',
          lastName: jobSeeker.last_name || '',
          phone: user?.phone || '',
          gender: jobSeeker.gender || '',
          city: user?.location || '',
          educationLevel: jobSeeker.degree || '',
          major: jobSeeker.major || '',
          experienceYears: jobSeeker.years_of_experience || '',
        });
        
      },
      error: err => {
        console.error('Error loading profile', err);
      }
    });
  }

  onSave() {
    const formValue = this.profileForm.value;
    if (!formValue) return;
  
    const updateData = {
      first_name: formValue.firstName || '',
      last_name: formValue.lastName || '',
      phone: formValue.phone || '',
      gender: formValue.gender || '',
      location: formValue.city || '',
      degree: formValue.educationLevel || '',
      major: formValue.major || '',
      years_of_experience: formValue.experienceYears || '',
    };
  
    this.jobSeekerApi.updateJobSeekerProfile(updateData).subscribe({
      next: () => {
        console.log('Profile updated');
  
        if (formValue.currentPassword && formValue.newPassword && formValue.confirmPassword) {
          if (formValue.newPassword !== formValue.confirmPassword) {
            alert('Passwords do not match.');
            return;
          }
  
          const passwordData = {
            current_password: formValue.currentPassword,
            new_password: formValue.newPassword,
            new_password_confirmation: formValue.confirmPassword
          };
  
          this.jobSeekerApi.changePassword(passwordData).subscribe({
            next: () => {
              alert('Password updated successfully');
              window.location.reload();
            },
            error: err => {
              console.error('Error updating password', err);
              alert(err.error?.message || 'Failed to update password.');
            }
          });
        } else {
          window.location.reload(); 
        }
      },
      error: err => {
        console.error('Error updating profile', err);
        alert('Failed to update profile.');
      }
    });
  }
}  