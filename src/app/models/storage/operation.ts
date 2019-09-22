import { Drive } from './drive';
import { Dataset } from './dataset';
import { OperationTypes } from '@app/enums/storage/operation-types.enum';

export class Operation {
  public id: number;
  public source: Drive;
  public destination: Drive;
  public dataset: Dataset;
  public type: OperationTypes;
  public executionDate: Date;
}
