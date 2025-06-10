import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';
import { SignInRequest, SignInResponse} from '../models/login.model';
import {AppComponent} from "../../app.component";
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
      private router: Router,
       private appComponent: AppComponent
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

  onSubmit() {
    if (this.signInForm.valid) {

      const data: SignInRequest = this.signInForm.value;

      this.authService.signIn(data).subscribe({
        next: (response: SignInResponse) => {
          Swal.fire("Login Successfully !", 'success', 'success');

          switch (response.user.role_id.toString()) {
            case '1':
              this.router.navigate(['/adminReports']);
              break;
            case '2':
              this.router.navigate(['/home-page']);
              break;
            case '3':
              this.router.navigate(['/employer']);
              break;
          }
        let user = response.user.role_id.toString();
          // Call setNavItems directly
          this.appComponent.navbar.setNavItems(user);
        },
        error: (error) => {
          Swal.fire('Error', error.error?.message || 'Login failed', 'error');
        }
      });
    } else {
      this.signInForm.markAllAsTouched();
    }
  }
}
