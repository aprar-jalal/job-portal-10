import {Component, Input, input} from '@angular/core';
import {NgForOf, SlicePipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-recent-job-block',
  imports: [
    RouterLink
  ],
  templateUrl: './recent-job-block.component.html',
  styleUrl: './recent-job-block.component.css'
})
export class RecentJobBlockComponent {

  @Input() job: any;

}
