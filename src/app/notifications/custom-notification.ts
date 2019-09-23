import { Operation } from '@app/models/storage/operation';
import { BadgeType } from './badge-type.enum';

export class CustomNotification {
  public id: number;
  public name: string;
  public badge: string;
  public content: string;
  public creation?: Date;
  public expiration?: Date;
  public operation?: Operation;
  public badgeType?: BadgeType;
}
