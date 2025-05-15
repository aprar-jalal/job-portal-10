import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJobApplicationsComponent } from './all-job-applications.component';

describe('AllJobApplicationsComponent', () => {
  let component: AllJobApplicationsComponent;
  let fixture: ComponentFixture<AllJobApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllJobApplicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllJobApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
