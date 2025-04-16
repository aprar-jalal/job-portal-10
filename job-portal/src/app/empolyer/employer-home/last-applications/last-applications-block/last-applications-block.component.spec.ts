import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastApplicationsBlockComponent } from './last-applications-block.component';

describe('LastApplicationsBlockComponent', () => {
  let component: LastApplicationsBlockComponent;
  let fixture: ComponentFixture<LastApplicationsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastApplicationsBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastApplicationsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
