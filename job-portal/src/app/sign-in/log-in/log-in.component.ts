import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  showPassword: boolean = false;
  signInForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get username() {
    return this.signInForm.get('username');
  }

  get password() {
    return this.signInForm.get('password');
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    if (this.signInForm.valid) {
      alert('You signed in successful!');
      console.log(this.signInForm.value);
    } else {
      this.signInForm.markAllAsTouched();
    }
  }
}

