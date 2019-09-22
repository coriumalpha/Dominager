import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageComponent } from './storage.component';
import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [StorageComponent],
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, StorageModule]
})
export class StorageModule {}
