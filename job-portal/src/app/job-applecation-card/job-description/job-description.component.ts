import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-description',
  imports: [CommonModule, RouterLink],
  templateUrl: './job-description.component.html',
  styleUrl: './job-description.component.css',
})
export class JobDescriptionComponent {
  //   jobs: any;
  // constructor(private route: ActivatedRoute, private jobService: JobDataService) {}
  // ngOnInit(): void {
  //   const jobId = Number(this.route.snapshot.paramMap.get('id'));
  //   this.jobs = this.jobService.getJobById(jobId);
  // }
}
