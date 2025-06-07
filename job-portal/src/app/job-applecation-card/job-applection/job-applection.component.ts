import { Component, OnInit } from '@angular/core';
import { JobCardComponent } from './job-card/job-card.component';
import { CommonModule } from '@angular/common';
import { JobService } from '../../empolyer/services/job.service';
import { Job } from '../../empolyer/models/job.model';
import { FavaroteJobService } from '../services/favorite/FavoriteJobService';
import { SearchService } from '../services/search/search.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job-applection',
  standalone: true,
  imports: [JobCardComponent, CommonModule],
  templateUrl: './job-applection.component.html',
  styleUrl: './job-applection.component.css',
})
export class JobApplectionComponent implements OnInit {
  jobs: Job[] = [];
  userId = 102;
  favoriteJobIds: number[] = [];
  notFound = false;

  constructor(
    private jobService: JobService,
    private favaroteJobService: FavaroteJobService,
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadJobsAndFavorites();

    this.searchService.searchQuery$.subscribe((query) => {
      if (query && query.trim() !== '') {
        this.searchJobs(query.trim());
      }
    });
  }

  searchJobs(query: string) {
    this.searchService.searchJobs(query).subscribe({
      next: (results: Job[]) => {
        this.jobs = results.filter((job) => job.availability === 1);
        this.notFound = this.jobs.length === 0;
        this.loadFavorites();
      },
      error: () => {
        this.jobs = [];
        this.notFound = true;
        if (this.notFound) {
          Swal.fire({
            title: `there is no job with this * ${query} * word`,
            icon: 'error',
            draggable: true,
          });
        }
        this.loadJobsAndFavorites();
      },
    });
  }

  loadJobsAndFavorites() {
    this.jobService.getAllJobs().subscribe((Jobs) => {
      this.jobs = Jobs.filter((Job) => Job.availability === 1);
      this.notFound = this.jobs.length === 0;
      this.loadFavorites();
    });
  }

  loadFavorites() {
    this.favaroteJobService
      .GetFavorateJobsForUSer(this.userId)
      .subscribe((Favorites) => {
        this.favoriteJobIds = Favorites.map((Favorite) => Favorite.job_id);
      });
  }

  onFavoriteChanged() {
    this.loadFavorites();
  }
}
