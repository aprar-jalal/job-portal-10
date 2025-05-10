import { Component } from '@angular/core';
import { PersonCardComponent } from '../person-card/person-card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-people-you-may-know',
  imports: [PersonCardComponent,CommonModule],
  templateUrl: './people-you-may-know.component.html',
  styleUrl: './people-you-may-know.component.css'
})
export class PeopleYouMayKnowComponent {
  people = [
    {
      name: 'Jana Ahmad',
      image: 'assets/default-pic.png',
      description: 'Frontend & Backend'
    },
    {
      name: 'Karim samer',
      image: 'assets/default-pic.png',
      description: ' Software Developer.'
    },
    {
      name: 'wassem jk',
      image: 'assets/default-pic.png',
      description: 'An Najah National University'
    },
    {
      name: 'Yugi Moto',
      image: 'assets/default-pic.png',
      description: 'Management Information Systems'
    }
 
  ];
}
