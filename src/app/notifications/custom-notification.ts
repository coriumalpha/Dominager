import { Operation } from '@app/models/storage/operation';

export class CustomNotification {
  public id: number;
  public name: string;
  public badge: string;
  public creation: Date;
  public expiration: Date;
  public operation: Operation;
}
