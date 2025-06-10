import { Component } from '@angular/core';
import {AppliedJob} from '../../../../job-applecation-card/models/Application';
import {ApplicationService} from '../../../../job-applecation-card/services/application/application.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-job-seeker-details',
  imports: [],
  templateUrl: './job-seeker-details.component.html',
  styleUrl: './job-seeker-details.component.css'
})
export class JobSeekerDetailsComponent {

  jobSeeker!: AppliedJob;
  constructor(private route: ActivatedRoute, private applicationService: ApplicationService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if(id){
      this.applicationService.getJobSeekerDetailsFromApplication(id).subscribe(application => {
        this.jobSeeker = application;
        console.log(this.jobSeeker);
      })
    }
  }


  acceptApplication(){
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.applicationService.updateApplicationStatus(id, "Accepted").subscribe({})

  }

  rejectApplication() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.applicationService.updateApplicationStatus(id, "Rejected").subscribe({})
  }


}
