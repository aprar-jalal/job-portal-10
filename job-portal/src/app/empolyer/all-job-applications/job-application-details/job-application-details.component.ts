import { Component } from '@angular/core';
import {ApplicationComponent} from './application/application.component';
import {JobSeekerDetailsComponent} from './job-seeker-details/job-seeker-details.component';

@Component({
  selector: 'app-job-application-details',
  imports: [
    ApplicationComponent,
    JobSeekerDetailsComponent
  ],
  templateUrl: './job-application-details.component.html',
  styleUrl: './job-application-details.component.css'
})
export class JobApplicationDetailsComponent {




}
