import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {JobApplectionComponent} from '../job-applecation-card/job-applection/job-applection.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@Component({
  selector: 'app-home-page',
  imports: [
    JobApplectionComponent,
    HeroSectionComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
