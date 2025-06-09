import { Component } from '@angular/core';
import {JobApplectionComponent} from '../job-applecation-card/job-applection/job-applection.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-home-page',
  imports: [
    JobApplectionComponent,
    HeroSectionComponent,
    FooterComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
