import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsInboxComponent } from './notifications-inbox.component';

describe('NotificationsInboxComponent', () => {
  let component: NotificationsInboxComponent;
  let fixture: ComponentFixture<NotificationsInboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsInboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
