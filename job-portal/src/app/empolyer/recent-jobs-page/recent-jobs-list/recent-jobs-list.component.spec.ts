import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentJobsListComponent } from './recent-jobs-list.component';

describe('RecentJobsListComponent', () => {
  let component: RecentJobsListComponent;
  let fixture: ComponentFixture<RecentJobsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentJobsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentJobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
