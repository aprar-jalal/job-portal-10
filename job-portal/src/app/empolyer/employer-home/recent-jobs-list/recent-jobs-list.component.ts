import { Component , OnInit} from '@angular/core';
import {RecentJobBlockComponent} from './recent-job-block/recent-job-block.component';
import {JobService} from '../../services/job.service'
import {Job} from '../../models/job.model';
import {NgForOf, SlicePipe} from '@angular/common';

@Component({
  selector: 'app-recent-jobs-list',
  imports: [
    RecentJobBlockComponent,
    NgForOf,
    SlicePipe
  ],
  templateUrl: './recent-jobs-list.component.html',
  styleUrl: './recent-jobs-list.component.css'
})


export class RecentJobsListComponent implements OnInit {

  // jobs = [
  //   {
  //     title: 'Sales Manager',
  //     location: 'Chisinau, Moldova',
  //     description: 'Handle lead generation, update CRM, and make impactful sales pitches. Ideal for an organized, fast-learner with strong language skills.',
  //     tags: ['HR & Administration', 'Full time', 'Management']
  //   },
  //   {
  //     title: 'Commercial Director',
  //     location: 'Elgin, Illinois',
  //     description: 'Drive company growth through data analysis, financial management, and market research. Strong knowledge of marketing and sales required, with experience in leadership.',
  //     tags: ['HR & Administration', 'Part time', 'Management']
  //   }
  // ];

  constructor(private jobService: JobService) {
  }

  jobs: Job[] = [];

  ngOnInit() {

    this.jobService.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
    })

  }
}

