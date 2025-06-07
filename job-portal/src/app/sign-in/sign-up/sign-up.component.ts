import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router'; 
import Swal from 'sweetalert2';
import { SignupService } from '../services/signup.service';
import { SignUpModel } from '../models/sign-up.model';

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

  constructor(
    private fb: FormBuilder,
    private signupService: SignupService,
    private router: Router 
  ) {
    this.jobSeekerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
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
      location: ['', Validators.required],
      industry: ['', Validators.required],
    }, { validators: this.passwordsMatch });
  }

  passwordsMatch(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    return password === confirm ? null : { mismatch: true };
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
  if (this.selectedRole === 'employer' && this.employerForm.valid) {
    const model: SignUpModel = {
      role_id: 3,
      email: this.employerForm.value.email,
      password: this.employerForm.value.password,
      password_confirmation: this.employerForm.value.confirmPassword,
      phone: this.employerForm.value.phone,
      location: this.employerForm.value.location,
      company_name: this.employerForm.value.companyName,
      industry: this.employerForm.value.industry,
    };

    this.signupService.register(model).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Employer Sign Up Successfully!',
        confirmButtonColor: '#1d2445'
      });
      this.router.navigate(['/login']);
    });

  } else if (this.selectedRole === 'job-seeker' && this.jobSeekerForm.valid) {
  const model: SignUpModel = {
    role_id: 2,
    email: this.jobSeekerForm.value.email,
    password: this.jobSeekerForm.value.password,
    password_confirmation: this.jobSeekerForm.value.confirmPassword,
    phone: this.jobSeekerForm.value.phone,
    location: this.jobSeekerForm.value.city,
    first_name: this.jobSeekerForm.value.firstName,
    last_name: this.jobSeekerForm.value.lastName,
    major: this.jobSeekerForm.value.major,
    degree: this.jobSeekerForm.value.educationLevel,
    years_of_experience: parseInt(this.jobSeekerForm.value.experience, 10),
    gender: this.jobSeekerForm.value.gender
    
    };

    this.signupService.register(model).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Job Seeker Sign Up Successfully!',
        confirmButtonColor: '#1d2445'
      });
      this.router.navigate(['/login']);
    });
  }
}
}