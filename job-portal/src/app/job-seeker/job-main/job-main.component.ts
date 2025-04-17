import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { ProfileComponent } from "../profile/profile.component";

@Component({
  selector: 'app-job-main',
  imports: [ProfileComponent,SideBarComponent],
  templateUrl: './job-main.component.html',
  styleUrl: './job-main.component.css'
})
export class JobMainComponent {

}
