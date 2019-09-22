import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalNotificationsComponent } from './physical-notifications.component';

describe('PhysicalNotificationsComponent', () => {
  let component: PhysicalNotificationsComponent;
  let fixture: ComponentFixture<PhysicalNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhysicalNotificationsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
