import {Component, Input} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-job-applications-block',
  imports: [
    NgClass,
    NgIf,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './job-applications-block.component.html',
  styleUrl: './job-applications-block.component.css'
})
export class JobApplicationsBlockComponent {

  @Input() jobApplications:any;

}
