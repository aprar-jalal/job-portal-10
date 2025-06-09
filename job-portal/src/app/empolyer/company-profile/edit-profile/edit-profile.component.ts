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
      companyName: new FormControl ("" , Validators.minLength(3)),
      industry: new FormControl (""),
      establishedDate: new FormControl (""),
      companySize: new FormControl (""),
      description: new FormControl (""),
    });

    const employerId = 1; //Temp !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    this.employerService.getEmployerById(employerId).subscribe({
      next: (data) => {
        this.employerForm.patchValue({
          companyName: data.company_name,
          industry: data.industry,
          establishedDate: data.established_date,
          companySize: data.company_size,
          description: data.description
        });
      },
    });

  }


  onUpdate() {
    if (this.employerForm.valid) {
      const employerId = 1 //Temp !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      const employerFromForm = this.employerForm.value;
      const dataToUpdate:Employer ={
        employer_id: employerId,
        company_name: employerFromForm.companyName,
        industry: employerFromForm.industry,
        logo_url: null,
        established_date: employerFromForm.establishedDate,
        company_size: employerFromForm.companySize,
        description: employerFromForm.description,
        verified: false,
      }

      this.employerService.updateEmployer(employerId, dataToUpdate).subscribe(
        (data) => {
        }
      )
    }
  }

  onCancel() {
    this.employerForm.reset();
    this.cancelClicked.emit();
  }


}
