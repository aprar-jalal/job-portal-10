import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-person-card',
  imports: [],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.css'
})
export class PersonCardComponent {
  @Input() name!: string;
  @Input() image!: string;
  @Input() description!: string;
}
