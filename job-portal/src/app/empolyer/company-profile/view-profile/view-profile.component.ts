import {Component, EventEmitter, Output} from '@angular/core';
import {Employer} from '../../models/employer.model';
import {EmployerService} from '../../services/employer.service';

@Component({
  selector: 'app-view-profile',
  imports: [],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css'
})
export class ViewProfileComponent {
  @Output() editClicked = new EventEmitter();


  employer!: Employer;

  constructor(private employerService: EmployerService) {
  }


  ngOnInit() {
    const employerId = 1; //Temp , I'm wait the auth
    this.employerService.getEmployerById(employerId).subscribe((employer: Employer) => {
      this.employer = employer;
    })
  }

  onEdit() {
    this.editClicked.emit();
  }



}
