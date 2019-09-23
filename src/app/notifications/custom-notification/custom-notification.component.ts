import { Component, OnInit, Input } from '@angular/core';
import { CustomNotification } from '../custom-notification';

@Component({
  selector: 'app-custom-notification',
  templateUrl: './custom-notification.component.html',
  styleUrls: ['./custom-notification.component.scss']
})
export class CustomNotificationComponent implements OnInit {
  @Input() notification: CustomNotification;

  constructor() {}

  ngOnInit() {}
}
