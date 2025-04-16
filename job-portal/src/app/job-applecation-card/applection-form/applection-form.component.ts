import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
@Component({
  selector: 'app-applection-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './applection-form.component.html',
  styleUrl: './applection-form.component.css'
})
export class ApplectionFormComponent {
  jobForm: FormGroup;
  jobTypes=['Full Time','Part Time','Anytime']
  // applyForm = new FormGroup({
  //   FirstName : new FormControl('',Validators.required),
  //   LastName : new FormControl('',Validators.required),
  //   Availability: new FormControl('',Validators.required),
  //   experience: [false] ,
  // })
  constructor(private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      availability: ['', Validators.required],
      experience: [false] ,
      resume: [null, Validators.required]
    });
  }


  onSubmit() {
    if (this.jobForm.valid) {
      console.log(this.jobForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.jobForm.patchValue({
        resume: file
      });
      this.jobForm.get('resume')?.updateValueAndValidity();
    }
  }
}


