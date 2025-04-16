import { Component } from '@angular/core';
import {CvListComponent} from './cv-list/cv-list.component';
import {LastApplicationsComponent} from './last-applications/last-applications.component';
import {QuickCvSearchComponent} from './quick-cv-search/quick-cv-search.component';

@Component({
  selector: 'app-employer-home',
  imports: [
    CvListComponent,LastApplicationsComponent,QuickCvSearchComponent
  ],
  templateUrl: './employer-home.component.html',
  styleUrl: './employer-home.component.css'
})
export class EmployerHomeComponent {

}
