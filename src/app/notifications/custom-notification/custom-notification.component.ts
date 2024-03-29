import { Component, OnInit, Input } from '@angular/core';
import { CustomNotification } from '../../shared/models/custom-notification/custom-notification';
import { BadgeType } from '../../shared/enums/badge-type.enum';

@Component({
  selector: 'app-custom-notification',
  templateUrl: './custom-notification.component.html',
  styleUrls: ['./custom-notification.component.scss']
})
export class CustomNotificationComponent implements OnInit {
  @Input() notification: CustomNotification;
  @Input() first: boolean;

  public badgeClass: string;

  constructor() {}

  ngOnInit() {
    this.setupNotification();
  }

  private setupNotification(): void {
    this.badgeClass = 'badge-' + (this.notification.badgeType || BadgeType.Info);
  }
}
