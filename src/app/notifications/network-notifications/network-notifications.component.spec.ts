import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkNotificationsComponent } from './network-notifications.component';

describe('NetworkNotificationsComponent', () => {
  let component: NetworkNotificationsComponent;
  let fixture: ComponentFixture<NetworkNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NetworkNotificationsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
