import { Component } from '@angular/core';
import {CvBlockComponent} from './cv-block/cv-block.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-cv-list',
  imports: [CvBlockComponent, NgForOf],
  templateUrl: './cv-list.component.html',
  styleUrl: './cv-list.component.css'
})
export class CvListComponent {

  candidates = [
    {
      id: 1,
      name: 'Mohammad',
      specialty: 'Web Development',
      experience: 'Freelance Local & Online',
      imageURL: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: 'Sara',
      specialty: 'UI/UX Design',
      experience: '3 Years at Creative Studio',
      imageURL: 'https://cdn.pixabay.com/photo/2022/05/15/03/49/girl-7196709_1280.png'
    },
    {
      id: 3,
      name: 'Omar',
      specialty: 'Mobile Development',
      experience: 'Freelance - Android & iOS',
      imageURL: 'https://cdn.pixabay.com/photo/2021/07/19/03/56/man-6477129_1280.jpg'
    }
  ];


}
