import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeaderPanelComponent } from './top-header-panel.component';

describe('TopHeaderPanelComponent', () => {
  let component: TopHeaderPanelComponent;
  let fixture: ComponentFixture<TopHeaderPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopHeaderPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopHeaderPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
