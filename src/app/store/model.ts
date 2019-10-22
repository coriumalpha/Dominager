import { Epic } from 'redux-observable';

// export type AppState = { [key in AnimalType]: AnimalList } &
//   Partial<{
//     routes: string;
//     feedback: unknown;
//   }>;

export type AppState = {} & Partial<{
  login: unknown;
  routes: string;
  feedback: unknown;
}>;

export function initialAppState() {
  return {
    //lion: initialAnimalList(),
    //elephant: initialAnimalList(),
  };
}

export interface EpicMiddleware {
  getEpics(): Epic[];
}
