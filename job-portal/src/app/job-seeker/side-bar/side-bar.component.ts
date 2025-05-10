import { Component } from '@angular/core';
import { PeopleYouMayKnowComponent } from '../people-you-may-know/people-you-may-know.component';
@Component({
  selector: 'app-side-bar',
  imports: [PeopleYouMayKnowComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}
