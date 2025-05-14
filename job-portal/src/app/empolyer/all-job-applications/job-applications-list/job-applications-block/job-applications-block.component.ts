import {Component, Input} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-job-applications-block',
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './job-applications-block.component.html',
  styleUrl: './job-applications-block.component.css'
})
export class JobApplicationsBlockComponent {

  @Input() jobApplications:any;

}
