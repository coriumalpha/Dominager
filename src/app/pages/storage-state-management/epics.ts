import { Injectable } from '@angular/core';
import { ofType, ActionsObservable, Epic, StateObservable } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { Action } from 'redux';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { dispatch } from '@angular-redux/store';
import { GetDrivesAction, changeDriveStatus, getDrivesFailed, getDrivesSucceeded } from './actions';
import { HttpClient } from '@angular/common/http';
import { GetDrivesResponse } from './models';
import { EpicMiddleware, AppState } from '@app/store/model';
import storageConstants from './constants';

const BASE_URL = 'https://localhost:44377/api/';

@Injectable()
export class DriveEpics implements EpicMiddleware {
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
        this.httpService.get<GetDrivesResponse>(`${BASE_URL}/Drive`).pipe(
          map(response => getDrivesSucceeded(response.drives)),
          catchError(error => of(getDrivesFailed(error)))
        )
      )
    );
  };

  getEpics(): Epic[] {
    return [this.getDrivesEpic];
  }
}
