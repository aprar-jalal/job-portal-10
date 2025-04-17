import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobMainComponent } from './job-main.component';

describe('JobMainComponent', () => {
  let component: JobMainComponent;
  let fixture: ComponentFixture<JobMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
