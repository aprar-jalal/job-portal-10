import { Component, OnInit } from '@angular/core';
import {JobService} from '../services/job.service';
import {Job} from '../models/job.model';
import {RecentJobsListComponent} from './recent-jobs-list/recent-jobs-list.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-recent-jobs-page',
  imports: [
    RecentJobsListComponent,
    RouterLink
  ],
  templateUrl: './recent-jobs-page.component.html',
  styleUrl: './recent-jobs-page.component.css'
})
export class RecentJobsPageComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }
}
