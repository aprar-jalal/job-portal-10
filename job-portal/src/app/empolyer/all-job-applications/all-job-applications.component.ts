import { Component } from '@angular/core';
import {JobApplicationsListComponent} from './job-applications-list/job-applications-list.component';

@Component({
  selector: 'app-all-job-applications',
  imports: [
    JobApplicationsListComponent
  ],
  templateUrl: './all-job-applications.component.html',
  styleUrls: ['./all-job-applications.component.css']
})

export class AllJobApplicationsComponent{

}
