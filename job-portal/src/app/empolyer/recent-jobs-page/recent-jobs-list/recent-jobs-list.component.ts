import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecentJobBlockComponent} from './recent-job-block/recent-job-block.component';
import {JobService} from '../../services/job.service';
import {Job} from '../../models/job.model';
import {NgForOf, SlicePipe} from '@angular/common';

@Component({
  selector: 'app-recent-jobs-list',
  imports: [
    RecentJobBlockComponent,
    NgForOf,
  ],
  templateUrl: './recent-jobs-list.component.html',
  styleUrl: './recent-jobs-list.component.css'
})


export class RecentJobsListComponent implements OnInit {

  constructor(private jobService: JobService) {
  }

  jobs: Job[] = [];

  @Output() numberOfJobs: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {

    this.jobService.getJobs(1).subscribe((jobs: Job[]) => {
      this.jobs = jobs;
      this.numberOfJobs.emit(this.jobs.length);
    })

  }
}

