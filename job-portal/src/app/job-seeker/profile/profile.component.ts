import { Component } from '@angular/core';
import { AppliedComponent } from "../applied/applied.component";
import { FormComponent } from '../form/form.component';
import { FavoriteComponent } from '../favorite/favorite.component';
import { StatusComponent } from '../status/status.component';
import { SaveComponent } from '../save/save.component';
import { CommonModule } from '@angular/common';
import { JobSeekerApiService } from '../services/job-seeker-api.service';
import { AuthService } from '../../sign-in/services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AppliedComponent, FormComponent, FavoriteComponent, StatusComponent, SaveComponent, CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  selectedComponent = '';

  profilePicUrl: string = '/assets/default-pic.png';
  backgroundPicUrl: string = 'assets/backgrond-profile-pic.jpeg';

  userName: string = 'User Name';

  constructor(private jobSeekerApi: JobSeekerApiService,
              private authService: AuthService) { 
    this.loadUserProfile();
  }

  selectComponent(name: string) {
    if (this.selectedComponent === name) {
      this.selectedComponent = '';
    } else {
      this.selectedComponent = name;
    }
  }

  loadUserProfile() {
    this.jobSeekerApi.getJobSeekerProfile().subscribe({
      next: (data: any) => {
        this.userName = `${data.jobSeeker?.first_name || ''} ${data.jobSeeker?.last_name || ''}`.trim();

        if (data.jobSeeker?.picture) {
          this.profilePicUrl = `http://127.0.0.1:8000/storage/${data.jobSeeker.picture}`;
        } else {
          this.profilePicUrl = '/assets/default-pic.png';
        }

        if (data.jobSeeker?.background_image) {
          this.backgroundPicUrl = `http://127.0.0.1:8000/storage/${data.jobSeeker.background_image}`;
        } else {
          this.backgroundPicUrl = 'assets/backgrond-profile-pic.jpeg';
        }
      },
      error: err => console.error('Error loading profile:', err)
    });
  }

  onEditProfilePic() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = e => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        this.profilePicUrl = URL.createObjectURL(file);
        this.uploadProfilePic(file);
      }
    };
    input.click();
  }

  onEditBackgroundPic() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = e => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        this.backgroundPicUrl = URL.createObjectURL(file);
        this.uploadBackgroundPic(file);
      }
    };
    input.click();
  }

  uploadProfilePic(file: File) {
    const formData = new FormData();
    formData.append('picture', file);

    this.jobSeekerApi.uploadProfilePicture(formData).subscribe({
      next: (res) => {
        console.log('Profile picture updated', res);
        if (res.path) {
          this.profilePicUrl = `http://127.0.0.1:8000/storage/${res.path}`;
        }
      },
      error: (err) => {
        console.error('Failed to upload profile picture:', err);
      }
    });
  }

  uploadBackgroundPic(file: File) {
    const formData = new FormData();
    formData.append('background_image', file);

    this.jobSeekerApi.uploadBackgroundPicture(formData).subscribe({
      next: (res) => {
        console.log('Background picture updated', res);
        if (res.path) {
          this.backgroundPicUrl = `http://127.0.0.1:8000/storage/${res.path}`;
        }
      },
      error: (err) => {
        console.error('Failed to upload background picture:', err);
      }
    });
  }
}