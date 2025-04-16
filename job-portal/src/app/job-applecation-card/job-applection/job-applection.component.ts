import { Component, OnInit } from '@angular/core';
import { JobCardComponent } from './job-card/job-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-applection',
  standalone: true,
  imports: [JobCardComponent,CommonModule,FormsModule],
  templateUrl: './job-applection.component.html',
  styleUrl: './job-applection.component.css',
})
export class JobApplectionComponent implements OnInit {
  jobs = [
    {
      id:1,
      CompanyName: 'haaa',
      JobType: 'fullTime',
      JobLocation: 'nablus',
      JobLogo: '/assets/chrome.svg',
      JobName: 'front end developer',
      AboutJop: '1140$ , team Lead',
      jobFullDisc:{
        JobDescription:'As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.',
        KeyResponsibilities:{
          1:'Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.',
          2:'Work closely with the Product Manager to understand the product vision and goals.',
          3:'Develop and maintain high-quality, user-centered design solutions.',
          4:'Collaborate with cross-functional teams to ensure design solutions meet business and technical requirements',
          5:'Present your work to the wider business at Show & Tell sessions.'
        },
        SkillandExperience:{
          1:'3+ years of experience in product design.',
          2:'You are familiar using Jira and Confluence in your workflow',
          3:'You have experience with Sketch, Figma, Adobe XD, or similar design tools'
        }
      }
    },
    {
      id:2,
      CompanyName: 'aprar',
      JobType: 'PartTime',
      JobLocation: 'jenin',
      JobLogo: '/assets/firefox.svg',
      JobName: 'hhhh',
      AboutJop: '1520$ , aaaa',
      jobFullDisc:{
        JobDescription:'As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.',
        KeyResponsibilities:{
          1:'Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.',
          2:'Work with BAs, product managers and tech teams to lead the Product Design',
        },
        SkillandExperience:{
          1:'3+ years of experience in product design.',
          2:'You are familiar using Jira and Confluence in your workflow',
          3:'You have experience with Sketch, Figma, Adobe XD, or similar design tools',
          4:'You are familiar using Jira and Confluence in your workflow'
        }
      }
    },
    {
      id:3,
      CompanyName: 'hello',
      JobType: 'fullTime',
      JobLocation: 'xxx',
      JobLogo: '/assets/meta.svg',
      JobName: 'tttt',
      AboutJop: '1000$ , tttt',
      jobFullDisc:{
        JobDescription:'As a As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas. Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.',
        KeyResponsibilities:{
          1:'Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.',
          2:'Work closely with the Product Manager to understand the product vision and goals.',
          3:'Develop and maintain high-quality, user-centered design solutions.',
          
        },
        SkillandExperience:{
          1:'You are familiar using Jira and Confluence in your workflow',
          2:'You have experience with Sketch, Figma, Adobe XD, or similar design tools'
        }
      }
    },
    {
      id:4,
      CompanyName: 'mnnn',
      JobType: 'fullTime',
      JobLocation: 'nablus',
      JobLogo: '/assets/reddit.svg',
      JobName: 'hello',
      AboutJop: '1300$ , team Lead',
      jobFullDisc:{
        JobDescription:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        KeyResponsibilities:{
          1:'Develop and maintain high-quality, user-centered design solutions.',
          2:'Collaborate with cross-functional teams to ensure design solutions meet business and technical requirements',
          3:'Present your work to the wider business at Show & Tell sessions.'
        },
        SkillandExperience:{
          1:'3+ years of experience in product design.',
          2:' You are familiar using Jira and Confluence in your workflow',
          3:'You have experience with Sketch, Figma, Adobe XD, or similar design tools'
        }
      }
    },
    {
      id:3,
      CompanyName: 'hello',
      JobType: 'fullTime',
      JobLocation: 'xxx',
      JobLogo: '/assets/meta.svg',
      JobName: 'tttt',
      AboutJop: '1200$ , tttt',
      jobFullDisc:{
        JobDescription:'As a As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas. Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.',
        KeyResponsibilities:{
          1:'Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.',
          2:'Work closely with the Product Manager to understand the product vision and goals.',
          3:'Develop and maintain high-quality, user-centered design solutions.',
          
        },
        SkillandExperience:{
          1:'You are familiar using Jira and Confluence in your workflow',
          2:'You have experience with Sketch, Figma, Adobe XD, or similar design tools'
        }
      }
    },
    {
      id:3,
      CompanyName: 'hello',
      JobType: 'fullTime',
      JobLocation: 'xxx',
      JobLogo: '/assets/meta.svg',
      JobName: 'tttt',
      AboutJop: '1220$ , tttt',
      jobFullDisc:{
        JobDescription:'As a As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas. Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.',
        KeyResponsibilities:{
          1:'Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.',
          2:'Work closely with the Product Manager to understand the product vision and goals.',
          3:'Develop and maintain high-quality, user-centered design solutions.',
          
        },
        SkillandExperience:{
          1:'You are familiar using Jira and Confluence in your workflow',
          2:'You have experience with Sketch, Figma, Adobe XD, or similar design tools'
        }
      }
    },
    {
      id:3,
      CompanyName: 'hello',
      JobType: 'fullTime',
      JobLocation: 'xxx',
      JobLogo: '/assets/meta.svg',
      JobName: 'tttt',
      AboutJop: '1220$ , tttt',
      jobFullDisc:{
        JobDescription:'As a As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas. Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.',
        KeyResponsibilities:{
          1:'Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.',
          2:'Work closely with the Product Manager to understand the product vision and goals.',
          3:'Develop and maintain high-quality, user-centered design solutions.',
          
        },
        SkillandExperience:{
          1:'You are familiar using Jira and Confluence in your workflow',
          2:'You have experience with Sketch, Figma, Adobe XD, or similar design tools'
        }
      }
    },
  ];
  filteredJobs = this.jobs;
  selectedLocation = 'All';
  
  uniqueLocations: string[] = [];
  
  ngOnInit() {
    // Get unique locations from jobs
    this.uniqueLocations = [...new Set(this.jobs.map(job => job.JobLocation))];
    this.filteredJobs = this.jobs;
  }
  
  filterByLocation(location: string) {
    if (location === 'All') {
      this.filteredJobs = this.jobs;
    } else {
      this.filteredJobs = this.jobs.filter(job => job.JobLocation === location);
    }
  }
}