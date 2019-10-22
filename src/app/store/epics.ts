import { Injectable } from '@angular/core';

import { combineEpics } from 'redux-observable';

@Injectable()
export class RootEpics {
  constructor() //private animalEpics: AnimalAPIEpics
  {}

  createEpics() {
    return combineEpics();
    //this.animalEpics.createEpic(ANIMAL_TYPES.ELEPHANT),
    //this.animalEpics.createEpic(ANIMAL_TYPES.LION),
  }
}
