import {Component, Input, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {JobService} from '../../../services/job.service';

@Component({
  selector: 'app-recent-job-block',
  imports: [
    RouterLink
  ],
  templateUrl: './recent-job-block.component.html',
  styleUrl: './recent-job-block.component.css',
  providers: [
  ]
})
export class RecentJobBlockComponent {

  constructor(private jobService: JobService) {
  }

  @Input() job: any;

  onDeleteJob() {
    if (!confirm('Are you sure you want to delete this job?')) return;

    this.jobService.deleteJob(this.job.job_id).subscribe({
      next: data => {
        console.log('deleted ');
      }
    });
  }

}
