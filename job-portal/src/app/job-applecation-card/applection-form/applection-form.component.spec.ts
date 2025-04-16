import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplectionFormComponent } from './applection-form.component';

describe('ApplectionFormComponent', () => {
  let component: ApplectionFormComponent;
  let fixture: ComponentFixture<ApplectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplectionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
