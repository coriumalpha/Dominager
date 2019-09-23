import { Component, OnInit } from '@angular/core';
import { DrivesService } from '@app/services/drives/drives.service';
import { Drive } from '@app/shared/models/storage/drive';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {
  public drives: Observable<Drive[]>;

  constructor(private drivesService: DrivesService) {}

  ngOnInit() {
    this.setupDrives();
    this.retrieveDrives();
  }

  private setupDrives(): void {
    this.drives = this.drivesService.getDrives();
  }

  private retrieveDrives(): void {
    this.drives.subscribe();
  }
}
