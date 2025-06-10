import {Component, EventEmitter, Output} from '@angular/core';
import {Employer} from '../../models/employer.model';
import {EmployerService} from '../../services/employer.service';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-view-profile',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css'
})
export class ViewProfileComponent {
  @Output() editClicked = new EventEmitter();


  employer!: Employer;

  constructor(private employerService: EmployerService) {
  }

  ngOnInit() {
    this.employerService.getEmployerInfo().subscribe((employer: Employer) => {
      this.employer = employer;
    })
  }


  onLogoClick(): void {

    const fileInput = document.createElement('input');

    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.onchange = (event: any) => {

      const file = event.target.files?.[0];
      console.log('Selected file:', file);

      if (file)
      {
        this.uploadLogo(file);
      }

    };

    fileInput.click();
  }

  uploadLogo(file: File): void {

    const formData = new FormData();
    formData.append('logo_url', file);

    this.employerService.updateEmployerLogo(formData).subscribe({
      next: () => {
        alert("Logo updated successfully");
      }
    });
  }


  onEdit() {
    this.editClicked.emit();
  }


}
