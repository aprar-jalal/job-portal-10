import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Location, NgForOf} from "@angular/common";
import {JobService} from '../../services/job.service';
import {Job} from '../../models/job.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-job',
    imports: [
        FormsModule,
        NgForOf,
        ReactiveFormsModule
    ],
  templateUrl: './edit-job.component.html',
  styleUrl: './edit-job.component.css'
})
export class EditJobComponent {
  constructor(private location: Location , private jobService: JobService, private route: ActivatedRoute) {

  }

  postJobForm !: FormGroup;


  ngOnInit(): void {

    const jobId = this.route.snapshot.params['id'];
    if (jobId) {
      this.jobService.getJobById(jobId).subscribe(job => {
        this.postJobForm = new FormGroup({
          job_title: new FormControl(job.job_title),
          description: new FormControl(job.description),
          location: new FormControl(job.location),
          salary: new FormControl(job.salary),
          job_type: new FormControl(job.job_type),
          workplace: new FormControl(job.workplace),
        });
      })
    }
  }

  cancelPost(){
    this.location.back();
  }

  submitPost(){

    const jobData = {
      ...this.postJobForm.value
    }

    this.jobService.postJob(jobData).subscribe(
      data => {
        console.log(data);
        this.location.back();
      }
    )
  }
}
