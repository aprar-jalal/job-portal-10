import {Component, Input} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-last-applications-block',
  imports: [
    NgClass,
    NgIf,
    RouterLink
  ],
  templateUrl: './last-applications-block.component.html',
  styleUrl: './last-applications-block.component.css'
})
export class LastApplicationsBlockComponent {
  @Input() recentApplication:any ;
}
