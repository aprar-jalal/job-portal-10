import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { JobService } from '../../empolyer/services/job.service';
import { Job } from '../../empolyer/models/job.model';
import { ApplicationService } from '../services/application/application.service';
@Component({
  selector: 'app-job-description',
  imports: [CommonModule, RouterLink],
  templateUrl: './job-description.component.html',
  styleUrl: './job-description.component.css',
})
export class JobDescriptionComponent implements OnInit {
  job?: Job;
  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private ApplicationService: ApplicationService
  ) {}

  ngOnInit(): void {
    const jobId = Number(this.route.snapshot.paramMap.get('id')); //number for conveirting the string into number
    if (jobId) {
      this.jobService.GetJobByIdForDetails(jobId).subscribe((job) => {
        this.job = job;
      });
    }
  }
  checkToken(){
      const token = localStorage.getItem('authToken');
      return token;
    }
  showApplecationMsg() {
    if (!this.job?.job_id) {
      return;
    }
    if (this.checkToken()){
    this.ApplicationService.JobSeekerAppliesForJobs(this.job.job_id).subscribe({
      next: (result) => {
        Swal.fire({
          title: 'Applection Done!',
          icon: 'success',
          draggable: true,
        });
      },
      error: (err) => {
        Swal.fire({
          title: 'You Applied to This Job Before',
          icon: 'error',
          draggable: true,
        });
      },
    });
  }else{
    Swal.fire({
          title: 'please sign in first',
          icon: 'error',
          draggable: true,
        });
  }
}
  
  
}
