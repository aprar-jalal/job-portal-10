import { Component , OnInit} from '@angular/core';
import {RecentJobBlockComponent} from './recent-job-block/recent-job-block.component';
import {JobService} from '../../services/job.service'
import {Job} from '../../models/job.model';
import {NgForOf, NgIf, SlicePipe} from '@angular/common';

@Component({
  selector: 'app-recent-jobs-list',
  imports: [
    RecentJobBlockComponent,
    NgForOf,
    SlicePipe,
    NgIf
  ],
  templateUrl: './recent-jobs-list.component.html',
  styleUrl: './recent-jobs-list.component.css'
})


export class RecentJobsListComponent implements OnInit {

  constructor(private jobService: JobService) {
  }

  jobs: Job[] = [];

  ngOnInit() {

    this.jobService.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
    })

  }
}

