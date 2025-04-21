import { Component, OnInit } from '@angular/core';
import { JobCardComponent } from './job-card/job-card.component';
import { CommonModule } from '@angular/common';
import { JobDataService } from '../serves/job-data.service';
import { JobDataLocation } from '../models/job-data-location';
import {RouterLink } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-job-applection',
  standalone: true,
  imports: [JobCardComponent, CommonModule, RouterLink, FormsModule],
  templateUrl: './job-applection.component.html',
  styleUrl: './job-applection.component.css',
})
export class JobApplectionComponent implements OnInit {
  jobs: JobDataLocation[] = [];
  constructor(private jobService: JobDataService) {};
  ngOnInit() {
  this.jobs = this.jobService.getAllJobs();
  }
}
