import { Injectable } from '@angular/core';
import { CustomNotification } from '@app/shared/models/custom-notification/custom-notification';
import { Observable, of } from 'rxjs';
import { STORAGE_NOTIFICATIONS } from './mock-notifications';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  public getNotifications(): Observable<CustomNotification[]> {
    return of(STORAGE_NOTIFICATIONS);
  }
}
