import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Job} from '../models/job.model'


@Injectable({
  providedIn: 'root'
})

export class JobService {

  private jobs: Job[] = [
    {
      title: 'Frontend Developer',
      location: 'Berlin, Germany',
      description: 'Build responsive web interfaces using Angular and React. Collaborate with UI/UX designers and backend teams.',
      tags: ['IT & Software', 'Full time', 'Frontend']
    },
    {
      title: 'Backend Engineer',
      location: 'Toronto, Canada',
      description: 'Design and implement RESTful APIs, manage databases, and ensure system scalability.',
      tags: ['IT & Software', 'Full time', 'Backend']
    },
    {
      title: 'Data Analyst',
      location: 'Cairo, Egypt',
      description: 'Analyze business data, create dashboards, and provide insights using tools like Power BI and Python.',
      tags: ['Data', 'Full time', 'Analytics']
    },
    {
      title: 'Cybersecurity Specialist',
      location: 'Tallinn, Estonia',
      description: 'Implement and monitor security measures to protect systems and data from cyber threats.',
      tags: ['Security', 'Full time', 'IT']
    },
    {
      title: 'AI Research Intern',
      location: 'Tokyo, Japan',
      description: 'Assist in developing machine learning models and analyzing datasets for AI projects.',
      tags: ['Artificial Intelligence', 'Internship', 'Research']
    },
    {
      title: 'DevOps Engineer',
      location: 'Austin, Texas',
      description: 'Automate deployment pipelines, manage cloud infrastructure, and monitor application health.',
      tags: ['DevOps', 'Full time', 'Cloud']
    },
    {
      title: 'Mobile App Developer',
      location: 'Barcelona, Spain',
      description: 'Develop and maintain cross-platform mobile applications using Flutter or React Native.',
      tags: ['Mobile', 'Full time', 'Development']
    },
    {
      title: 'Technical Support Specialist',
      location: 'Manila, Philippines',
      description: 'Provide technical assistance to users, troubleshoot software issues, and maintain documentation.',
      tags: ['Support', 'Full time', 'Customer Service']
    },
    {
      title: 'UI/UX Designer',
      location: 'Stockholm, Sweden',
      description: 'Design clean and user-friendly interfaces, conduct user research, and improve usability.',
      tags: ['Design', 'Part time', 'Creative']
    },
    {
      title: 'Full Stack Developer',
      location: 'Amman, Jordan',
      description: 'Work on both frontend and backend development, using modern frameworks and technologies.',
      tags: ['IT & Software', 'Remote', 'Full Stack']
    }
  ];

  constructor() { }

  getJobs(): Observable<Job[]> {
    return of(this.jobs);
  }
}
