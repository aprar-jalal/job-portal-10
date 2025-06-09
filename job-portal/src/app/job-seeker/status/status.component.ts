import { Component, OnInit } from '@angular/core';
import { JobSeekerApiService } from '../services/job-seeker-api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-status',
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent implements OnInit {
  appliedJobs: any[] = [];

  constructor(private jobSeekerService: JobSeekerApiService) {}

  ngOnInit(): void {
    this.getAppliedJobs();
  }

  getAppliedJobs(): void {
    this.jobSeekerService.getAppliedJobs().subscribe({
      next: (res: any) => {
        this.appliedJobs = res || [];
      },
      error: (err) => {
        console.error('Error fetching applied jobs:', err);
      }
    });
  }
}
