import { Drive } from './drive';
import { Operation } from './operation';

export class Dataset {
  public id: number;
  public name: string;
  public description: string;
  public location: Drive;
  public operations: Operation[];
}
