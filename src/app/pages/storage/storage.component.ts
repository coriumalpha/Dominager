import { Component, OnInit } from '@angular/core';
import { Drive } from '@app/shared/models/storage/drive';
import { Observable } from 'rxjs';
import { dispatch, select } from '@angular-redux/store';
import { AppState } from '@app/store/model';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {
  drives: Drive[] = [];

  @select((appState: AppState) => appState.drives.items)
  drives$: Observable<Drive[]>;

  ngOnInit() {
    this.drives$.subscribe(drives => {
      this.drives = drives;
    });
  }
}
