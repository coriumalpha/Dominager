import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import driveReducer from '@app/pages/storage-state-management/reducers';

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = composeReducers(
  defaultFormReducer<unknown>(),
  combineReducers({
    drives: driveReducer,
    router: routerReducer
  })
);
