import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-job',
  imports: [],
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.css'
})
export class PostJobComponent {

  constructor(private location: Location) {}

  cancelPost(){
    this.location.back();
  }
}
