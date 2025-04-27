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
