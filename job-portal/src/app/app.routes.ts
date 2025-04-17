import { Routes } from '@angular/router';
import {NotificationsPageComponent} from './notifications-page/notifications-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JobMainComponent } from './job-seeker/job-main/job-main.component';

export const routes: Routes = [
  {path:'notifications-page',component:NotificationsPageComponent},
  {path:'',component:HomePageComponent},
  { path: 'home-page', component: HomePageComponent },
  {path:'job-seeker',component:JobMainComponent}
];