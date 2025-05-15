import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  selectedRole: string = '';

  jobSeekerForm: FormGroup;
  employerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.jobSeekerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      city: ['', Validators.required],
      educationLevel: ['', Validators.required],
      major: ['', Validators.required],
      experience: ['', Validators.required],

    });

    this.employerForm = this.fb.group({
      companyName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      phone: ['', Validators.required],
      website: [''],
      location: ['', Validators.required],
      industry: ['', Validators.required],


    });
  }

  onRoleSelect(role: string) {
    this.selectedRole = role;
  }

  get jobSeekerControls() {
    return this.jobSeekerForm.controls;
  }

  get employerControls() {
    return this.employerForm.controls;
  }

  onSubmit() {
    if (this.selectedRole === 'job-seeker' && this.jobSeekerForm.valid) {
      alert('Job Seeker Sign Up Successful!');
    } else if (this.selectedRole === 'employer' && this.employerForm.valid) {
      alert('Employer Sign Up Successful!');
    } else {
      alert('Please fill out the form correctly!');
    }
  }
}
