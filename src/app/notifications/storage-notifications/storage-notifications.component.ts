import { Component, OnInit } from '@angular/core';
import { CustomNotification } from '../custom-notification';

@Component({
  selector: 'app-storage-notifications',
  templateUrl: './storage-notifications.component.html',
  styleUrls: ['./storage-notifications.component.scss']
})
export class StorageNotificationsComponent implements OnInit {
  public not1: CustomNotification = Object.assign(new CustomNotification(), { name: 'Test', badge: 5 });

  constructor() {}

  ngOnInit() {}
}
