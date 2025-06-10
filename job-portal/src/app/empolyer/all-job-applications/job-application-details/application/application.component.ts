import { Component } from '@angular/core';
import {NgIf,NgClass} from "@angular/common";
import {ActivatedRoute} from '@angular/router';
import {ApplicationService} from '../../../../job-applecation-card/services/application/application.service';
import {AppliedJob} from '../../../../job-applecation-card/models/Application';

@Component({
  selector: 'app-application',
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './application.component.html',
  styleUrl: './application.component.css'
})
export class ApplicationComponent {
  jobApplication!: AppliedJob;
  constructor(private route: ActivatedRoute, private applicationService: ApplicationService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if(id){
      this.applicationService.getApplicationAndJobDetails(id).subscribe(application => {
        this.jobApplication = application;
        console.log(this.jobApplication);
      })
    }
  }
}
