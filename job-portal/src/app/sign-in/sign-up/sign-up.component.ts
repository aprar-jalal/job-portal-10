import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';


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
    }, { validators: this.passwordsMatch });

    this.employerForm = this.fb.group({
      companyName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      phone: ['', Validators.required],
      website: ['',Validators.pattern('https?://.+')],
      location: ['', Validators.required],
      industry: ['', Validators.required],
    }, { validators: this.passwordsMatch });
  }


  passwordsMatch(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    if (password === confirm) {
      return null; 
    } else {
      return { mismatch: true }; 
    }
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
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Job Seeker Sign Up Successfully!',
      confirmButtonColor: '#1d2445'
    });
  } else if (this.selectedRole === 'employer' && this.employerForm.valid) {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Employer Sign Up Successfully!',
      confirmButtonColor: '#1d2445'
    });
  } 
  }
}


