import { Operation } from '@app/shared/models/storage/operation';
import { BadgeType } from '../../enums/badge-type.enum';

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
