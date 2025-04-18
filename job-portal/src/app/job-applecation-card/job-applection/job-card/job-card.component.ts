import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink } from '@angular/router';
@Component({
  selector: 'app-job-card',
  imports: [CommonModule,RouterLink],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {
  @Input() job: any;

 

  isFavorite = false;
  favoriteMessage = ' ';

  changColor() {
    this.isFavorite = !this.isFavorite;
    
  }
}