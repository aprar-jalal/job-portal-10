import { Routes } from '@angular/router';
import { NotificationsPageComponent } from './Notifications/notifications-page/notifications-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JobMainComponent } from './job-seeker/job-main/job-main.component';
import { LogInComponent } from './sign-in/log-in/log-in.component';
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


import { ResetPasswordComponent } from './sign-in/reset-password/reset-password.component';

import {CompanyProfileComponent} from './empolyer/company-profile/company-profile.component';

import {JobApplicationDetailsComponent} from './empolyer/all-job-applications/job-application-details/job-application-details.component';
import {EditJobComponent} from './empolyer/recent-jobs-page/edit-job/edit-job.component';
import {RedirectGuard} from './guards/redirect.guard';
import { FavoriteComponent } from './job-seeker/favorite/favorite.component';



export const routes: Routes = [
  // {path: 'job-application', component: JobApplectionComponent},
  { path: 'employer', component: EmployerHomeComponent },
  { path: 'login', component: LogInComponent },
  {
    path: '',
    canActivate: [RedirectGuard],
    component: EmployerHomeComponent
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
 { path: 'sign-up', component: SignUpComponent },
  { path: 'notifications-page', component: NotificationsPageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'job-seeker', component: JobMainComponent },
  { path: 'job-description/:id', component: JobDescriptionComponent },
  {path:'postJob', component: PostJobComponent},
  {path:'recentJobs', component: RecentJobsPageComponent},
  {path:'job-details', component: JobDetailsComponent},

  {path: 'allJobApplications', component: AllJobApplicationsComponent},
  {path:'adminReports', component: AdminReportsComponent},
  {path:'about-us', component: AboutUsComponent},


  { path: 'reset-password', component: ResetPasswordComponent },

  {path:'job-details/:id', component: JobDetailsComponent},
  {path: 'companyProfile', component: CompanyProfileComponent},
  {path: 'applicationDetails/:id', component: JobApplicationDetailsComponent},
  {path:'edit-job/:id', component: EditJobComponent},

  {path: 'allJobApplications', component: AllJobApplicationsComponent},
  {path:'job-application', component: JobApplectionComponent},
{path:'favorite',component:FavoriteComponent}

];
