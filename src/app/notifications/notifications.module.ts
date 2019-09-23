import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageNotificationsComponent } from './storage-notifications/storage-notifications.component';
import { PhysicalNotificationsComponent } from './physical-notifications/physical-notifications.component';
import { NetworkNotificationsComponent } from './network-notifications/network-notifications.component';
import { CustomNotificationComponent } from './custom-notification/custom-notification.component';

@NgModule({
  declarations: [
    StorageNotificationsComponent,
    PhysicalNotificationsComponent,
    NetworkNotificationsComponent,
    CustomNotificationComponent
  ],
  imports: [CommonModule],
  exports: [StorageNotificationsComponent, PhysicalNotificationsComponent, NetworkNotificationsComponent]
})
export class NotificationsModule {}
