import { Routes } from '@angular/router';
import { JobApplectionComponent } from './job-applecation-card/job-applection/job-applection.component';
import { JobDescriptionComponent } from './job-applecation-card/job-description/job-description.component';
import { ApplectionFormComponent } from './job-applecation-card/applection-form/applection-form.component';

export const routes: Routes = [
    {path: '', component: JobApplectionComponent,
    },
    {
    path: 'job-description', component:JobDescriptionComponent,
    },
    {
    path: 'Applection-form', component: ApplectionFormComponent,
    }
];
