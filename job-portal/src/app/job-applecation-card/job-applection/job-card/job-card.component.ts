import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JobApplectionComponent } from '../job-applection.component';
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
    this.UpdateTitle();
  }

  UpdateTitle(){
    if(this.isFavorite){
      this.favoriteMessage="you added this job to your favorites";
  }else{
    this.favoriteMessage="you removed this job from your favorites";
  }
}
}