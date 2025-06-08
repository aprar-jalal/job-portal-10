import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FavaroteJobService } from '../../services/favorite/FavoriteJobService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css',
})
export class JobCardComponent implements OnChanges {
  @Input() job!: any;
  @Input() userId!: number;
  @Input() favoriteJobIds: number[] = [];

  @Output() favoriteChanged = new EventEmitter<void>();

  IsFavoratieJobs: boolean = false;

  constructor(private favaroteJobService: FavaroteJobService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['favoriteJobIds'] || changes['job']) {
      this.IsFavoratieJobs = this.favoriteJobIds.includes(this.job.job_id);
    }
  }

  toggelFavaorate(): void {
    if (!this.job?.job_id || !this.userId) {
      console.error('Missing job id or user id');
      return;
    }

    if (this.IsFavoratieJobs) {
      this.favaroteJobService
        .deleteJobFromFavorite(this.job.job_id, this.userId)
        .subscribe({
          next: () => {
            this.IsFavoratieJobs = false;
            Swal.fire('Removed From Favorite');
            this.favoriteChanged.emit();
          },
          error: () => {
            Swal.fire('Something went wrong');
          },
        });
    } else {
      this.favaroteJobService
        .AddToFavarote(this.job.job_id, this.userId)
        .subscribe({
          next: () => {
            this.IsFavoratieJobs = true;
            Swal.fire('Added To Favorite');
            this.favoriteChanged.emit();
          },
          error: () => {
            Swal.fire('please sign in first :)');
          },
        });
    }
  }
}
