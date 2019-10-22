import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { NgModule } from '@angular/core';
import { AppState } from './model';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { rootReducer } from './reducers';
import { environment } from '@env/environment';

const epicMiddleware = createEpicMiddleware();

const initialState: AppState = {
  login: {
    credentials: {}
  }
};

@NgModule({
  imports: [NgReduxModule],
  providers: []
})
export class StoreModule {
  constructor(private store: NgRedux<AppState>) {
    const rootEpic = combineEpics();
    //...this.todoEpics.getEpics()
    const middelwares = [epicMiddleware];
    const devMiddelwares = [...middelwares, createLogger()];
    const prodMiddelwares = [...middelwares];

    store.configureStore(rootReducer, initialState, environment.production ? prodMiddelwares : devMiddelwares);

    epicMiddleware.run(rootEpic);
  }
}
