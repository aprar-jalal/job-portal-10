import { Component } from '@angular/core';
import {LastApplicationsBlockComponent} from './last-applications-block/last-applications-block.component';
import {CvBlockComponent} from '../cv-list/cv-block/cv-block.component';
import {NgForOf, SlicePipe} from '@angular/common';

@Component({
  selector: 'app-last-applications',
  imports: [LastApplicationsBlockComponent, NgForOf, SlicePipe],
  templateUrl: './last-applications.component.html',
  styleUrl: './last-applications.component.css'
})
export class LastApplicationsComponent {
  jobApplications = [
    {
      id: 1,
      title: 'Web Development Internship',
      applicant: 'Mohammad',
      skills: ['React', 'HTML', 'CSS'],
      status: 'Accepted',
      imageURL: 'https://media.istockphoto.com/id/1435745704/photo/portrait-of-smiling-mid-adult-businessman-standing-at-corporate-office.jpg?s=1024x1024&w=is&k=20&c=tJytJf_M1BGBHCc7QF7K43xzmyuWzlAzuz_2IVkPeII='
    },
    {
      id: 2,
      title: 'Frontend Developer',
      applicant: 'Sara',
      skills: ['Angular', 'TypeScript', 'SCSS'],
      status: 'Rejected',
      imageURL: 'https://cdn.pixabay.com/photo/2023/01/27/04/53/muslim-7747745_1280.png'
    },
    {
      id: 3,
      title: 'Backend Developer Intern',
      applicant: 'Omar',
      skills: ['Node.js', 'Express', 'MongoDB'],
      status: 'Under Review',
      imageURL: 'https://randomuser.me/api/portraits/men/33.jpg'
    },
    {
      id: 4,
      title: 'UI/UX Internship',
      applicant: 'Lina',
      skills: ['Figma', 'Adobe XD', 'Prototyping'],
      status: 'Interview Scheduled',
      imageURL: 'https://cdn.pixabay.com/photo/2023/10/06/06/42/child-8297551_1280.png'
    },
    {
      id: 5,
      title: 'Full Stack Developer',
      applicant: 'Yousef',
      skills: ['React', 'Laravel', 'MySQL'],
      status: 'Accepted',
      imageURL: 'https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_1280.jpg'
    }
  ];

}
