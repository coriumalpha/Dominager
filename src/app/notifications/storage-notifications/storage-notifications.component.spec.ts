import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageNotificationsComponent } from './storage-notifications.component';

describe('StorageNotificationsComponent', () => {
  let component: StorageNotificationsComponent;
  let fixture: ComponentFixture<StorageNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StorageNotificationsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
