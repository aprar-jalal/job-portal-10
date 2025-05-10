import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-save',
  imports: [CommonModule,FormsModule],
  templateUrl: './save.component.html',
  styleUrl: './save.component.css'
})
export class SaveComponent {
 skills: string[] = [ ];
  newSkill: string = '';
  
  //-------------------------------------------------------------------------- 
  description: string = 'Computer Science Student | Gaining Real-World Experience in Tech Motivated CS student combining academic knowledge with hands-on work experience. Passionate about technology, problem-solving, and continuous growth.👨‍💻💡';

  tempDescription: string = this.description; 

  isEditingDescription: boolean = false; 

  toggleEditDescription() {
    this.tempDescription = this.description;
    this.isEditingDescription = true;
  }

  saveDescription() {
    this.description = this.tempDescription;
    this.isEditingDescription = false;
  }
  //-------------------------------------------------------------------------- 
  
  addSkill() {
    if (this.newSkill.trim() && !this.skills.includes(this.newSkill.trim())) {
      this.skills.push(this.newSkill.trim());
      this.newSkill = '';
    }
  }

  removeSkill(skill: string) {
    this.skills = this.skills.filter((s) => s !== skill);
  }
}
