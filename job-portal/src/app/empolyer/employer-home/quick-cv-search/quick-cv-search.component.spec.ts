import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickCvSearchComponent } from './quick-cv-search.component';

describe('QuickCvSearchComponent', () => {
  let component: QuickCvSearchComponent;
  let fixture: ComponentFixture<QuickCvSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickCvSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickCvSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
