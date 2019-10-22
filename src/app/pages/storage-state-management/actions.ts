import { Action } from 'redux';
import { Drive, DriveStatus } from './models';
import storageConstants from './constants';

export interface AddDriveAction extends Action {
  item: Drive;
}

export function addDrive(item: Drive): AddDriveAction {
  return {
    type: storageConstants.ADD_DRIVE,
    item
  };
}

export interface RemoveDriveAction extends Action {
  id: number;
}

export function removeDrive(id: number): RemoveDriveAction {
  return {
    type: storageConstants.REMOVE_DRIVE,
    id
  };
}

export interface GetDrivesAction extends Action {
  items: Drive[];
}

export function getDrives(items: Drive[]): GetDrivesAction {
  return {
    type: storageConstants.GET_DRIVES,
    items
  };
}

export interface ChangeDriveStatusAction extends Action {
  status: DriveStatus;
}

export function changeDriveStatus(status: DriveStatus): ChangeDriveStatusAction {
  return {
    type: storageConstants.CHANGE_DRIVE_STATUS,
    status
  };
}

export type DrivesActions = AddDriveAction | RemoveDriveAction | GetDrivesAction | ChangeDriveStatusAction;
