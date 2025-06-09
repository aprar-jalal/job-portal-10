import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class DashboardComponent implements OnInit {
  totalUsers: number = 1250;
  activeJobs: number = 456;
  totalApplications: number = 3789;
  successfulPlacements: number = 234;

  monthlyStats = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    applications: [65, 59, 80, 81, 56, 55],
    placements: [28, 48, 40, 19, 86, 27]
  };

  topJobCategories = [
    { name: 'Software Development', count: 145 },
    { name: 'Marketing', count: 98 },
    { name: 'Sales', count: 87 },
    { name: 'Design', count: 76 }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Add actual API calls here
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.initializeChart();
      }, 0);
    }
  }

  private initializeChart() {
    const canvas = document.getElementById('monthlyStats') as HTMLCanvasElement;
    if (!canvas) return;

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: this.monthlyStats.labels,
        datasets: [
          {
            label: 'Applications',
            data: this.monthlyStats.applications,
            borderColor: '#2c3e50',
            tension: 0.4
          },
          {
            label: 'Placements',
            data: this.monthlyStats.placements,
            borderColor: '#00b894',
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}
