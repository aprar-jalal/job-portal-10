import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationsBlockComponent } from './job-applications-block.component';

describe('JobApplicationsBlockComponent', () => {
  let component: JobApplicationsBlockComponent;
  let fixture: ComponentFixture<JobApplicationsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobApplicationsBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
