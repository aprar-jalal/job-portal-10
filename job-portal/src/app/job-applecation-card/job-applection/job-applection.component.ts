import { Component, OnInit } from '@angular/core';
import { JobCardComponent } from './job-card/job-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobDataService } from '../serves/job-data.service';
import { JobDataLocation } from '../models/job-data-location';

@Component({
  selector: 'app-job-applection',
  standalone: true,
  imports: [JobCardComponent,CommonModule,FormsModule],
  templateUrl: './job-applection.component.html',
  styleUrl: './job-applection.component.css',
})
export class JobApplectionComponent implements OnInit {
  jobs: JobDataLocation[] = [];
  constructor(private jobService: JobDataService) {}
  filteredJobs = this.jobs;
  selectedLocation = 'All';
  
  uniqueLocations: string[] = [];
  
  ngOnInit() {
    this.jobs = this.jobService.getAllJobs();
    this.uniqueLocations = [...new Set(this.jobs.map(job => job.JobLocation))];
    this.filteredJobs = this.jobs;

  }
  
  filterByLocation(location: string) {
    if (location === 'All') {
      this.filteredJobs = this.jobs;
    } else {
      this.filteredJobs = this.jobs.filter(job => job.JobLocation === location);
    }
  }
}