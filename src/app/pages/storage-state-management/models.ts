export interface Drive {
  id: number;
  name: string;
  capacity: number;
  modelName: string;
}

export type DriveStatus = 'loading' | 'idle' | 'error';

export interface GetDrivesResponse {
  drives: Drive[];
}
