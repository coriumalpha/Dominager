import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StorageNotificationsComponent } from '@app/notifications/storage-notifications/storage-notifications.component';
import { PhysicalNotificationsComponent } from '@app/notifications/physical-notifications/physical-notifications.component';
import { NetworkNotificationsComponent } from '@app/notifications/network-notifications/network-notifications.component';
@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, HomeRoutingModule, FontAwesomeModule],
  declarations: [
    HomeComponent,
    StorageNotificationsComponent,
    PhysicalNotificationsComponent,
    NetworkNotificationsComponent
  ]
})
export class HomeModule {}
