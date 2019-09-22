import { Dataset } from './dataset';

export class Drive {
  public name: string;
  public capacity: number;
  public modelName: string;
  public datasets: Dataset[];
}
