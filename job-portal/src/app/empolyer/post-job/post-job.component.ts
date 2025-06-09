import { Component } from '@angular/core';
import {Location, NgForOf} from '@angular/common';
import {JobService} from '../services/job.service';
import {Job} from '../models/job.model';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-post-job',
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.css'
})
export class PostJobComponent {

  constructor(private location: Location , private jobService: JobService) {}

  postJobForm !: FormGroup;

  ngOnInit(): void {
    this.postJobForm = new FormGroup({
      job_title: new FormControl(''),
      description: new FormControl(''),
      location: new FormControl(''),
      salary: new FormControl(''),
      job_type: new FormControl(''),
      workplace: new FormControl(''),
      industry: new FormControl(''),
      job_category: new FormControl(''),
    });

  }

  cancelPost(){
    this.location.back();
  }

  submitPost(){

    const jobData = {
      ...this.postJobForm.value
    }

    this.jobService.postJob(jobData).subscribe({
      next: (result) => {
        console.log(result);
        this.location.back();
      },
      error: (error) => {
        console.log(error);
      }
      }
    )
  }
}
