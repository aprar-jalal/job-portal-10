import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentJobBlockComponent } from './recent-job-block.component';

describe('RecentJobBlockComponent', () => {
  let component: RecentJobBlockComponent;
  let fixture: ComponentFixture<RecentJobBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentJobBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentJobBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
