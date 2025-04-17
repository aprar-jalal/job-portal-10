import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormsModule , Validators,FormGroup,FormBuilder} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  imports: [RouterLink,ReactiveFormsModule, FormsModule,CommonModule],
  standalone: true,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  forgotForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
}

get email() {
  return this.forgotForm.get('email');
}

onSubmit() {
  if (this.forgotForm.valid) {
    alert('Reset code sent to your email!');
  } else {
    this.forgotForm.markAllAsTouched();
  }
}
}