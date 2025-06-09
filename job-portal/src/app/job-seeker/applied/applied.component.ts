import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { JobSeekerApiService } from '../services/job-seeker-api.service';

@Component({
  selector: 'app-applied',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './applied.component.html',
  styleUrl: './applied.component.css'
})
export class AppliedComponent implements OnInit {
  appliedJobs: any[] = [];

  constructor(private jobSeekerApi: JobSeekerApiService) {}

  ngOnInit(): void {
    this.loadAppliedJobs();
  }

  loadAppliedJobs(): void {
    this.jobSeekerApi.getAppliedJobs().subscribe({
      next: (res: any) => {
        console.log('Applied Jobs Response:', res);
        this.appliedJobs = res || [];
      },
      error: (err) => {
        console.error('Error fetching applied jobs:', err);
      }
    });
  }

  deleteJob(jobId: number): void {
    if (confirm('Are you sure you want to remove this applied job?')) {
      this.jobSeekerApi.deleteAppliedJob(jobId).subscribe({
        next: () => {
          this.appliedJobs = this.appliedJobs.filter(item => item.job.job_id !== jobId);
        },
        error: (err) => {
          console.error('Error deleting applied job:', err);
        }
      });
    }
  }
}
