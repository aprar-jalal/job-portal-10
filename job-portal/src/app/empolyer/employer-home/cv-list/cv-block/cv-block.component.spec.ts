import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvBlockComponent } from './cv-block.component';

describe('CvBlockComponent', () => {
  let component: CvBlockComponent;
  let fixture: ComponentFixture<CvBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
