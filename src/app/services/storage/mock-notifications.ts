import { CustomNotification } from '@app/notifications/custom-notification';
import { BadgeType } from '@app/notifications/badge-type.enum';

export const STORAGE_NOTIFICATIONS: CustomNotification[] = [
  {
    id: 1,
    name: 'Recursos literarios',
    badge: '4',
    badgeType: BadgeType.Warning,
    content: 'Operación copia a Gutenberg'
  },
  {
    id: 2,
    name: 'Archivo fotográfico',
    badge: '9',
    badgeType: BadgeType.Success,
    content: 'Operación espejo a Backup No. 2'
  },
  {
    id: 3,
    name: 'Copias históricas',
    badge: 'S/T',
    badgeType: BadgeType.Info,
    content: 'Operación actualizar a Backup No. 1'
  }
];
