import { Component,OnInit } from '@angular/core';
import { JobSeekerApiService } from '../services/job-seeker-api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form',
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  resumeFile: File | null = null;
  resumeUrl: string | null = null;

  constructor(private jobSeekerApi: JobSeekerApiService) {}

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.jobSeekerApi.getJobSeekerProfile().subscribe({
      next: (profile: any) => {
        this.resumeUrl = profile.resume_url;
      },
      error: err => {
        console.error('Failed to load profile:', err);
      }
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.resumeFile = file;
    }
  }

  onSubmit() {
    if (!this.resumeFile) {
      alert("Please select a resume file.");
      return;
    }

    const formData = new FormData();
    formData.append('resume', this.resumeFile);

    this.jobSeekerApi.uploadResume(formData).subscribe({
      next: (res: any) => {
        alert("Resume uploaded successfully!");
        this.resumeUrl = res.path;
      },
      error: err => {
        console.error('Upload error:', err);
        alert("Failed to upload resume.");
      }
    });
  }

  downloadResume() {
    if (!this.resumeUrl) {
      alert("No resume uploaded yet.");
      return;
    }

    const link = document.createElement('a');
    link.href = this.resumeUrl;
    link.download = 'resume';
    link.click();
  }
  deleteResume() {
    if (!confirm("Are you sure you want to delete your resume?")) return;
  
    this.jobSeekerApi.deleteResume().subscribe({
      next: () => {
        alert("Resume deleted successfully.");
        this.resumeUrl = null;
        this.resumeFile = null;
      },
      error: err => {
        console.error("Delete failed:", err);
        alert("Failed to delete resume.");
      }
    });
  }
  
}