import { Routes } from '@angular/router';
import {NotificationsPageComponent} from './notifications-page/notifications-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JobMainComponent } from './job-seeker/job-main/job-main.component';
import { LogInComponent } from './sign-in/log-in/log-in.component';
import { NgModule } from '@angular/core';
import { ForgotPasswordComponent } from './sign-in/forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-in/sign-up/sign-up.component';
// import { JobApplectionComponent } from './job-applecation-card/job-applection/job-applection.component';
import { JobDescriptionComponent } from './job-applecation-card/job-description/job-description.component';
import { ApplectionFormComponent } from './job-applecation-card/applection-form/applection-form.component';
import {EmployerHomeComponent} from './empolyer/employer-home/employer-home.component';

export const routes: Routes = [
  // {path: 'job-application', component: JobApplectionComponent},
  {path:'employer',component: EmployerHomeComponent},
  { path: 'login', component: LogInComponent },
  {path:'',component:HomePageComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'sign-up', component: SignUpComponent },
  {path:'notifications-page',component:NotificationsPageComponent},
  { path: 'home-page', component: HomePageComponent },
  {path:'job-seeker',component:JobMainComponent},
  {path: 'job-description', component:JobDescriptionComponent,},
  {path: 'Applection-form', component: ApplectionFormComponent,}
];
