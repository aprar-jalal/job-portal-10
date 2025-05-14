import { Component } from '@angular/core';
import {CvListComponent} from './cv-list/cv-list.component';
import {LastApplicationsComponent} from './last-applications/last-applications.component';
import {QuickCvSearchComponent} from './quick-cv-search/quick-cv-search.component';
import {RecentJobsListComponent} from './recent-jobs-list/recent-jobs-list.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-employer-home',
  imports: [
    CvListComponent, LastApplicationsComponent, QuickCvSearchComponent, RecentJobsListComponent, RouterLink
  ],
  templateUrl: './employer-home.component.html',
  styleUrl: './employer-home.component.css'
})
export class EmployerHomeComponent {

}
