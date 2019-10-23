import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { NgModule } from '@angular/core';
import { AppState } from './model';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { rootReducer } from './reducers';
import { environment } from '@env/environment';
import { DriveEpics } from '@app/pages/storage-state-management/epics';

const epicMiddleware = createEpicMiddleware();

const initialState: AppState = {
  drives: {
    items: []
  }
};

@NgModule({
  imports: [NgReduxModule],
  providers: [DriveEpics]
})
export class StoreModule {
  constructor(private store: NgRedux<AppState>, private driveEpics: DriveEpics) {
    const rootEpic = combineEpics(...this.driveEpics.getEpics());
    const middelwares = [epicMiddleware];
    const devMiddelwares = [...middelwares, createLogger()];
    const prodMiddelwares = [...middelwares];

    store.configureStore(rootReducer, initialState, environment.production ? prodMiddelwares : devMiddelwares);

    epicMiddleware.run(rootEpic);
  }
}
