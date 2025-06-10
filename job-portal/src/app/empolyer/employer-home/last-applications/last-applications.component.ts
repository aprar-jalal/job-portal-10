import { Component } from '@angular/core';
import {LastApplicationsBlockComponent} from './last-applications-block/last-applications-block.component';
import {CvBlockComponent} from '../cv-list/cv-block/cv-block.component';
import {NgForOf, SlicePipe} from '@angular/common';
import {AppliedJob} from '../../../job-applecation-card/models/Application';
import {ApplicationService} from '../../../job-applecation-card/services/application/application.service';

import {OnInit} from '@angular/core';

@Component({
  selector: 'app-last-applications',
  imports: [LastApplicationsBlockComponent, NgForOf, SlicePipe],
  templateUrl: './last-applications.component.html',
  styleUrl: './last-applications.component.css'
})
export class LastApplicationsComponent {

  jobApplications:AppliedJob[] = [];

  constructor(private application: ApplicationService) {
  }
  ngOnInit() {
    this.application.displayApplicationsForEmployer().subscribe(applications => {
      this.jobApplications = applications;
      console.log(this.jobApplications);
    })
  }


}
