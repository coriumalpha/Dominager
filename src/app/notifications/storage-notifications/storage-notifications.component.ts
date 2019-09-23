import { Component, OnInit } from '@angular/core';
import { CustomNotification } from '../../shared/models/custom-notification/custom-notification';
import { Observable } from 'rxjs';
import { StorageService } from '@app/services/storage/storage.service';

@Component({
  selector: 'app-storage-notifications',
  templateUrl: './storage-notifications.component.html',
  styleUrls: ['./storage-notifications.component.scss']
})
export class StorageNotificationsComponent implements OnInit {
  public notifications: Observable<CustomNotification[]>;

  constructor(private storage: StorageService) {}

  ngOnInit() {
    this.setupNotifications();
    this.retrieveNotifications();
  }

  private setupNotifications(): void {
    this.notifications = this.storage.getNotifications();
  }

  private retrieveNotifications(): void {
    this.notifications.subscribe();
  }
}
