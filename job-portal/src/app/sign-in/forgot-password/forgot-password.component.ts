import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  imports: [RouterLink, ReactiveFormsModule, FormsModule, CommonModule],
  standalone: true,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  forgotForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.forgotForm.get('email');
  }

  onSubmit() {
    if (this.forgotForm.valid) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Reset code sent to your email!',
        showConfirmButton: false,
        timer: 3000
      }).then(() => {
        this.router.navigate(['/reset-password']);
      });
    } else {
      this.forgotForm.markAllAsTouched();
    }
  }
}
