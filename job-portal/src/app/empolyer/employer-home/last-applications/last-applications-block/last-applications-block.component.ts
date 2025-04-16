import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-last-applications-block',
  imports: [
    NgClass
  ],
  templateUrl: './last-applications-block.component.html',
  styleUrl: './last-applications-block.component.css'
})
export class LastApplicationsBlockComponent {
  @Input() recentApplication:any ;
}
