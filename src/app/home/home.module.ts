import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotificationsModule } from '@app/notifications/notifications.module';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    FontAwesomeModule,
    NotificationsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}
