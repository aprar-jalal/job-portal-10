import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../services/auth.service';
import { LoginRequest } from '../models/login.model';
@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  showPassword: boolean = false;
  signInForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
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

  onSubmit() {
    if (this.signInForm.valid) {
      const loginData = new LoginRequest(
        this.signInForm.value.username,
        this.signInForm.value.password
      );

      this.authService.login(loginData).subscribe({
        next: (res) => {
          localStorage.setItem('authToken', res.token);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: res.message || 'Signed in successfully!',
            showConfirmButton: false,
            timer: 3000
          });

          this.router.navigate(['/home-page']);
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Login failed',
            text: err.error.message || 'Please check your credentials',
          });
        }
      });
    } else {
      this.signInForm.markAllAsTouched();
    }
  }
}
