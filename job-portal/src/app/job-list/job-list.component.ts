

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  postedDate: Date;
  status: 'active' | 'closed';
  applicants: number;
}

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class JobListingsComponent implements OnInit {
  jobs: Job[] = [];
  filteredJobs: Job[] = [];
  searchTerm: string = '';

  ngOnInit() {
    // Mock data - replace with actual API call
    this.jobs = [
      {
        id: 1,
        title: 'Senior Software Engineer',
        company: 'Tech Corp',
        location: 'New York',
        type: 'Full-time',
        postedDate: new Date(),
        status: 'active',
        applicants: 25
      }
    ];
    this.filteredJobs = this.jobs;
  }

  searchJobs() {
    this.filteredJobs = this.jobs.filter(job =>
      job.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  removeJob(jobId: number) {
    this.jobs = this.jobs.filter(job => job.id !== jobId);
    this.filteredJobs = this.filteredJobs.filter(job => job.id !== jobId);
    // Add API call here
  }

  toggleJobStatus(jobId: number) {
    const job = this.jobs.find(j => j.id === jobId);
    if (job) {
      job.status = job.status === 'active' ? 'closed' : 'active';
      // Add API call here
    }
  }
}
