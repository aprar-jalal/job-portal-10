import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentJobsPageComponent } from './recent-jobs-page.component';

describe('RecentJobsPageComponent', () => {
  let component: RecentJobsPageComponent;
  let fixture: ComponentFixture<RecentJobsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentJobsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentJobsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
