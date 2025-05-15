import { Component } from '@angular/core';
import { PeopleYouMayKnowComponent } from '../people-you-may-know/people-you-may-know.component';
import { SettingsComponent } from '../settings/settings.component';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-side-bar',
  imports: [PeopleYouMayKnowComponent,SettingsComponent,CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  showSettings = false;

  toggleSettings() {
    this.showSettings = !this.showSettings;
  }
}
