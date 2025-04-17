import { Component } from '@angular/core';
import { AppliedComponent } from "../applied/applied.component";
import { FormComponent } from '../form/form.component';
import { FavoriteComponent } from '../favorite/favorite.component';
import { StatusComponent } from '../status/status.component';
import { SaveComponent } from '../save/save.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile',
  imports: [AppliedComponent,FormComponent,FavoriteComponent,StatusComponent,SaveComponent,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
  
  
export class ProfileComponent {
  selectedComponent = ''; 

  selectComponent(name: string) {
    this.selectedComponent = name;
  }

}
