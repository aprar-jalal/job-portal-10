import { Component, OnInit } from '@angular/core';
import {AllJobsCardComponent} from './all-jobs-card/all-jobs-card.component';
import { JobDataService } from '../serves/job-data.service';
import { JobDataLocation } from '../models/job-data-location';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-jobs',
  imports: [AllJobsCardComponent,CommonModule,FormsModule],
  templateUrl: './all-jobs.component.html',
  styleUrl: './all-jobs.component.css'
})
export class AllJobsComponent implements OnInit{
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
