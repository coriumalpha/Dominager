import { Dataset } from './dataset';

export class Drive {
  public id: number;
  public name: string;
  public capacity: number;
  public modelName: string;
  public datasets?: Dataset[];
}
