import { Drive, DriveStatus } from './models';
import { DrivesActions, AddDriveAction, RemoveDriveAction, GetDrivesAction, ChangeDriveStatusAction } from './actions';
import storageConstants from './constants';

export interface DriveListState {
  items: Drive[];
  status?: DriveStatus;
}

export default function todoReducer(oldState: DriveListState = {} as any, action: DrivesActions): DriveListState {
  switch (action.type) {
    case storageConstants.ADD_DRIVE: {
      const addAction = action as AddDriveAction;

      const newItem = addAction.item;

      const newState: DriveListState = {
        ...oldState,
        items: [...oldState.items, newItem]
      };

      return newState;
    }
    case storageConstants.REMOVE_DRIVE: {
      const removeAction = action as RemoveDriveAction;
      const items: Drive[] = oldState.items.filter(item => item.id !== removeAction.id);

      const newState: DriveListState = {
        ...oldState,
        items
      };

      return newState;
    }
    case storageConstants.GET_DRIVES: {
      const getDrivesAction = action as GetDrivesAction;
      const items: Drive[] = getDrivesAction.items;

      const newState: DriveListState = {
        ...oldState,
        items,
        status: 'idle'
      };

      return newState;
    }
    case storageConstants.CHANGE_DRIVE_STATUS: {
      const changeDriveStatusAction = action as ChangeDriveStatusAction;

      const newState: DriveListState = {
        ...oldState,
        status: changeDriveStatusAction.status
      };

      return newState;
    }
    default: {
      return oldState;
    }
  }
}
