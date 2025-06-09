import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerDetailsComponent } from './job-seeker-details.component';

describe('JobSeekerDetailsComponent', () => {
  let component: JobSeekerDetailsComponent;
  let fixture: ComponentFixture<JobSeekerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSeekerDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSeekerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
