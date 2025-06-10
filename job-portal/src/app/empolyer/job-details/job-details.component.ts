import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Job} from '../models/job.model';
import {JobService} from '../services/job.service';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-job-details',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {
  job!: Job;

  constructor(private route: ActivatedRoute, private jobService: JobService)
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id)
    {
      this.jobService.getJobById(id).subscribe(job => {
        this.job = job;
      });
    }
  }


  onDeleteJob() {
    if (!confirm('Are you sure you want to delete this job?')) return;

    this.jobService.deleteJob(this.job.job_id).subscribe({
      next: data => {
        console.log('deleted');
      }
    });
  }

}
