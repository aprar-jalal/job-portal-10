import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplectionComponent } from './job-applection.component';

describe('JobApplectionComponent', () => {
  let component: JobApplectionComponent;
  let fixture: ComponentFixture<JobApplectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobApplectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
