import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cv-block',
  imports: [],
  templateUrl: './cv-block.component.html',
  styleUrl: './cv-block.component.css'
})
export class CvBlockComponent {
  @Input() candidate: any;
}
