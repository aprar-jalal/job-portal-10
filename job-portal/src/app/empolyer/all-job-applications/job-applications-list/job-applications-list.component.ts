import { Component } from '@angular/core';
import {JobApplicationsBlockComponent} from './job-applications-block/job-applications-block.component';
import {NgForOf} from '@angular/common';
import {AppliedJob} from '../../../job-applecation-card/models/Application';
import {ApplicationService} from '../../../job-applecation-card/services/application/application.service';

@Component({
  selector: 'app-job-applications-list',
  imports: [
    JobApplicationsBlockComponent,
    NgForOf
  ],
  templateUrl: './job-applications-list.component.html',
  styleUrl: './job-applications-list.component.css'
})
export class JobApplicationsListComponent {

  jobApplications:AppliedJob[] = [];

  constructor(private application: ApplicationService) {
  }
  ngOnInit() {
    this.application.displayApplicationsForEmployer().subscribe(applications => {
      this.jobApplications = applications;
      this.filterStatus('All');
      console.log(this.jobApplications);
    })
  }

  filteredApplications = [...this.jobApplications];
  selectedStatus = 'All';

  filterStatus(status: string)
  {
    this.selectedStatus = status;

    if (this.selectedStatus == 'All')
    {
      this.filteredApplications = [...this.jobApplications];
    }

    else {
      this.filteredApplications = this.jobApplications.filter(app => app.application_status === status);
    }
  }
}
