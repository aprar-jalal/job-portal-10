import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJobsCardComponent } from './all-jobs-card.component';

describe('AllJobsCardComponent', () => {
  let component: AllJobsCardComponent;
  let fixture: ComponentFixture<AllJobsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllJobsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllJobsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
