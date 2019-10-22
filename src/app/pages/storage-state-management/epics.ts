import { Injectable } from '@angular/core';
import { ofType, ActionsObservable, Epic, StateObservable } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { Action } from 'redux';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { dispatch } from '@angular-redux/store';
import {
  GetDrivesAction,
  AddDriveAction,
  RemoveDriveAction,
  ChangeDriveStatusAction,
  changeDriveStatus
} from './actions';
import { HttpClient } from '@angular/common/http';
import { GetDrivesResponse } from './models';
import { EpicMiddleware, AppState } from '@app/store/model';
import storageConstants from './constants';

/**
 * example of side effects, if I needed some interaction with a server I would use epics.
 * Below is an example of epics with RxJS 6
 */

const BASE_URL = 'https://some-server/api/';

@Injectable()
export class TodoEpics implements EpicMiddleware {
  constructor(private httpService: HttpClient) {}

  @dispatch()
  startLoading() {
    return changeDriveStatus('loading');
  }

  getDrivesEpic = (
    action$: ActionsObservable<GetDrivesAction>,
    state$: StateObservable<AppState>
  ): Observable<Action> => {
    return action$.pipe(
      ofType(storageConstants.GET_DRIVES),
      tap(action => this.startLoading()),
      mergeMap(action =>
        this.httpService.get<GetDrivesResponse>(`${BASE_URL}/todos`).pipe(
          map(response => getTodosSucceeded(response.items)),
          catchError(error => of(getTodosFailed(error)))
        )
      )
    );
  };

  getEpics(): Epic[] {
    return [this.getDrivesEpic];
  }
}
