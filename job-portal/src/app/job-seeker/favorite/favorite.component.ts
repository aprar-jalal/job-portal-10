import { Component, OnInit } from '@angular/core';
import { JobSeekerApiService } from '../services/job-seeker-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent implements OnInit {
  favoriteJobs: any[] = [];

  constructor(private jobSeekerApi: JobSeekerApiService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.jobSeekerApi.getFavoriteJobs().subscribe({
      next: (res: any) => {
        this.favoriteJobs = res as any[];
      },
      error: (err) => {
        console.error('Error fetching favorite jobs:', err);
      }
    });
  }

  removeFromFavorites(jobId: number): void {
    if (confirm('Are you sure you want to remove this job from favorites?')) {
      this.jobSeekerApi.removeFavoriteJob(jobId).subscribe({
        next: () => {
          this.favoriteJobs = this.favoriteJobs.filter(item => item.job_id !== jobId);
        },
        error: (err) => {
          console.error('Error removing job from favorites:', err);
        }
      });
    }
  }
}
