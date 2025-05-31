import { Routes } from '@angular/router';
import { NotificationsPageComponent } from './Notifications/notifications-page/notifications-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JobMainComponent } from './job-seeker/job-main/job-main.component';
import { LogInComponent } from './sign-in/log-in/log-in.component';
import { NgModule } from '@angular/core';
import { ForgotPasswordComponent } from './sign-in/forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-in/sign-up/sign-up.component';
import { JobApplectionComponent } from './job-applecation-card/job-applection/job-applection.component';
import { JobDescriptionComponent } from './job-applecation-card/job-description/job-description.component';
import { EmployerHomeComponent } from './empolyer/employer-home/employer-home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {AdminReportsComponent} from './admin-reports/admin-reports.component';
import {PostJobComponent} from './empolyer/post-job/post-job.component';
import {RecentJobsPageComponent} from './empolyer/recent-jobs-page/recent-jobs-page.component';
import {JobDetailsComponent} from './empolyer/job-details/job-details.component';
import {AllJobApplicationsComponent} from './empolyer/all-job-applications/all-job-applications.component';
import {CompanyProfileComponent} from './empolyer/company-profile/company-profile.component';


export const routes: Routes = [
  // {path: 'job-application', component: JobApplectionComponent},
  { path: 'employer', component: EmployerHomeComponent },
  { path: 'login', component: LogInComponent },
  { path: '', component: HomePageComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'notifications-page', component: NotificationsPageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'job-seeker', component: JobMainComponent },
  { path: 'job-description/:id', component: JobDescriptionComponent },
  {path:'postJob', component: PostJobComponent},
  {path:'recentJobs', component: RecentJobsPageComponent},
  {path:'job-details', component: JobDetailsComponent},
  {path:'adminReports', component: AdminReportsComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'job-details/:id', component: JobDetailsComponent},
  {path: 'companyProfile', component: CompanyProfileComponent},
  {path: 'allJobApplications', component: AllJobApplicationsComponent},
  {path:'job-application', component: JobApplectionComponent}
];
