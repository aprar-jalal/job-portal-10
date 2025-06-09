import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobSeekerApiService } from '../services/job-seeker-api.service';
import { AuthService } from '../../sign-in/services/auth.service';  

interface JobSeekerProfile {
  profile_description?: string;
  skills?: string[];
  phone?: string;
  gender?: string;
  location?: string;
  degree?: string;
  job_seeker?: {
    first_name?: string;
    last_name?: string;
    major?: string;
    years_of_experience?: number;
  };
}

@Component({
  selector: 'app-save',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {
  profileData: JobSeekerProfile = {};

  description: string = '';
  tempDescription: string = '';
  isEditingDescription: boolean = false;

  skills: string[] = [];
  newSkill: string = '';

  constructor(
    private jobSeekerApi: JobSeekerApiService,
    private authService: AuthService 
  ) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile() {
    this.jobSeekerApi.getJobSeekerProfile().subscribe({
      next: (data: any) => {
        console.log('Profile API response:', data);

        this.profileData = {
          phone: data.user?.phone,
          gender: data.jobSeeker?.gender,
          location: data.user?.location,
          degree: data.jobSeeker?.degree,
          job_seeker: {
            first_name: data.jobSeeker?.first_name,
            last_name: data.jobSeeker?.last_name,
            major: data.jobSeeker?.major,
            years_of_experience: data.jobSeeker?.years_of_experience
          },
          profile_description: data.jobSeeker?.profile_description,
          skills: data.jobSeeker?.skills
        };

        this.description = this.profileData.profile_description || '';
        this.skills = Array.isArray(this.profileData.skills) ? this.profileData.skills : [];
      },
      error: (err) => {
        console.error('Error loading profile', err);
      }
    });
  }

  toggleEditDescription() {
    this.tempDescription = this.description;
    this.isEditingDescription = true;
  }

  saveDescription() {
    this.description = this.tempDescription;
    this.isEditingDescription = false;
    this.saveProfileUpdates();
  }

  addSkill() {
    const newSkill = this.newSkill.trim();
    if (newSkill && !this.skills.includes(newSkill)) {
      this.skills.push(newSkill);
      this.newSkill = '';
      this.saveProfileUpdates();
    }
  }

  removeSkill(skill: string) {
    this.skills = this.skills.filter(s => s !== skill);
    this.saveProfileUpdates();
  }

  saveProfileUpdates() {
    const updatedData = {
      profile_description: this.description,
      skills: this.skills
    };

    this.jobSeekerApi.updateJobSeekerProfile(updatedData).subscribe({
      next: () => {
        console.log('Profile updated successfully');
      },
      error: (err) => {
        console.error('Failed to update profile:', err);
      }
    });
  }
}
