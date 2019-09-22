import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageNotificationsComponent } from './storage-notifications/storage-notifications.component';
import { PhysicalNotificationsComponent } from './physical-notifications/physical-notifications.component';
import { NetworkNotificationsComponent } from './network-notifications/network-notifications.component';

@NgModule({
  declarations: [StorageNotificationsComponent, PhysicalNotificationsComponent, NetworkNotificationsComponent],
  imports: [CommonModule]
})
export class NotificationsModule {}
