import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastApplicationsComponent } from './last-applications.component';

describe('LastApplicationsComponent', () => {
  let component: LastApplicationsComponent;
  let fixture: ComponentFixture<LastApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastApplicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
