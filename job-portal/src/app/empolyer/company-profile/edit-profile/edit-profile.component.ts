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

    // const employerId = 1; //Temp !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //
    // this.employerService.getEmployerById(employerId).subscribe({
    //   next: (data) => {
    //     this.employerForm.patchValue({
    //       company_name: data.company_name,
    //       industry: data.industry,
    //       established_date: data.established_date,
    //       company_size: data.company_size,
    //       description: data.description
    //     });
    //   },
    // });

    this.employerService.getEmployerInfo().subscribe({
        next: (data) => {
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

  selectedFile: File|null = null;
  onFileSelected(event:any)
  {
    this.selectedFile = event.target.files[0];

  }

  onUpdate() {
    if (this.employerForm.valid) {
      const formValue = this.employerForm.value;
      const dataToUpdate = new FormData();

      dataToUpdate.append('company_name', formValue.companyName);
      dataToUpdate.append('industry', formValue.industry);
      dataToUpdate.append('established_date', formValue.establishedDate);
      dataToUpdate.append('company_size', formValue.companySize);
      dataToUpdate.append('description', formValue.description);

      if (this.selectedFile) {
        dataToUpdate.append('logo_url', this.selectedFile);
      }

      if (this.selectedFile) {
        dataToUpdate.append('logo_url', this.selectedFile);
      }

      this.employerService.updateEmployer(dataToUpdate).subscribe(
        (data) => {
          alert("مبروووووك")
        }
      )
    }
  }

  onCancel() {
    this.employerForm.reset();
    this.cancelClicked.emit();

  }


}
