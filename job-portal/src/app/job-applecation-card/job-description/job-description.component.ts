import { CommonModule } from '@angular/common';
import { Component ,OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { JobDataService } from '../serves/job-data.service';
import { JobDataLocation } from '../models/job-data-location';


@Component({
  selector: 'app-job-description',
  imports: [CommonModule,RouterLink],
  templateUrl: './job-description.component.html',
  styleUrl: './job-description.component.css'
})
export class JobDescriptionComponent implements OnInit {
  job?: JobDataLocation;
  constructor(
    private route: ActivatedRoute,
    private jobService: JobDataService
  ) {}

  ngOnInit(): void {
    const jobId = Number(this.route.snapshot.paramMap.get('id'));
    this.job = this.jobService.getJobById(jobId);
  }
 
}
