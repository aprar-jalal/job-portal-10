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
        ReactiveFormsModule
    ],
  templateUrl: './edit-job.component.html',
  styleUrl: './edit-job.component.css'
})
export class EditJobComponent {


  editJobForm!: FormGroup;
  jobId!: number;

  constructor(private location: Location , private jobService: JobService, private route: ActivatedRoute) {
    this.editJobForm = new FormGroup({
      job_title: new FormControl(''),
      description: new FormControl(''),
      location: new FormControl(''),
      salary: new FormControl(''),
      job_type: new FormControl(''),
      workplace: new FormControl(''),
      industry: new FormControl(''),
      job_category: new FormControl(''),
    });

    this.jobId = +this.route.snapshot.params['id'];

  }


  ngOnInit(): void {

    if (this.jobId)
    {
    this.jobService.getJobById(this.jobId).subscribe({
      next: (job) => {
        this.editJobForm.patchValue({
          job_title: job.job_title,
          description: job.description,
          location: job.location,
          salary: job.salary,
          job_type: job.job_type,
          workplace: job.workplace,
          job_category: job.job_category,
        });
      },
      error: () => {
        alert("please try again later");
      }
    });
  }
  }

  cancelPost(){
    this.location.back();
  }

  submitEdit(){

    const jobData = this.editJobForm.value;

    this.jobService.updateJob(this.jobId, jobData).subscribe({
      next: (data) => {
        console.log('Job updated', data);
        this.location.back();
      },
    });
  }
}
