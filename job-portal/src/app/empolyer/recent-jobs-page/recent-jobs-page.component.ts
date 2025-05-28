import { Component, OnInit } from '@angular/core';
import {JobService} from '../services/job.service';
import {Job} from '../models/job.model';
import {RecentJobsListComponent} from './recent-jobs-list/recent-jobs-list.component';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-recent-jobs-page',
  imports: [
    RecentJobsListComponent,
    RouterLink,
    NgIf,
  ],
  templateUrl: './recent-jobs-page.component.html',
  styleUrl: './recent-jobs-page.component.css'
})
export class RecentJobsPageComponent{

  numberOfJobs: number = 0;

  getNumberOfJobs(count: number): void {
    console.log(count);
    this.numberOfJobs = count;
  }
}
