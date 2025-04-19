import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-jobs-card',
  imports: [CommonModule,RouterLink],
  templateUrl: './all-jobs-card.component.html',
  styleUrl: './all-jobs-card.component.css'
})
export class AllJobsCardComponent {
  @Input() job: any;
}
