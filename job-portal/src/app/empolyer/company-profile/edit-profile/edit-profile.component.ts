import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Employer} from '../../models/employer.model';
import {EmployerService} from '../../services/employer.service';
@Component({
  selector: 'app-edit-profile',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit {
  @Output() cancelClicked = new EventEmitter<unknown>();


  constructor(private employerService: EmployerService) { }

  employerForm!: FormGroup;

  ngOnInit()
  {
    this.employerForm = new FormGroup({
      company_name: new FormControl ("" , Validators.minLength(3)),
      industry: new FormControl (""),
      established_date: new FormControl (""),
      company_size: new FormControl (""),
      description: new FormControl (""),
    });

    this.employerService.getEmployerInfo().subscribe({
        next: (data) => {
          console.log(data);
          this.employerForm.patchValue({
            company_name: data.company_name,
            industry: data.industry,
            established_date: data.established_date,
            company_size: data.company_size,
            description: data.description
          });
        },
    })

  }

  onUpdate() {
    const formValue:Employer = this.employerForm.value;
    const dataToUpdate = {
      company_name: formValue.company_name || '',
      industry: formValue.industry || '',
      established_date: formValue.established_date || Date,
      company_size: formValue.company_size|| '',
      description: formValue.description|| '',
    };

    console.log('data to be sent:', dataToUpdate);

    this.employerService.updateEmployer(dataToUpdate).subscribe({
      next: ()  =>
      {
        alert('Update successful');
        this.cancelClicked.emit();
      },
      error: () => {
        alert('Update failed');
      }
    });
  }


  onCancel() {
    this.employerForm.reset();
    this.cancelClicked.emit();
  }


}
