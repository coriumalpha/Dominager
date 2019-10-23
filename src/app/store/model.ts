import { Epic } from 'redux-observable';
import { DriveListState } from '@app/pages/storage-state-management/reducers';
import { Router } from '@angular/router';

export interface AppState {
  drives: DriveListState;
}

export interface EpicMiddleware {
  getEpics(): Epic[];
}
