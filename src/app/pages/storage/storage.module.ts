import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageComponent } from './storage.component';
import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';
import { TranslateModule } from '@ngx-translate/core';
import { StorageRoutingModule } from './storage-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [StorageComponent],
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, StorageRoutingModule, FontAwesomeModule]
})
export class StorageModule {}
