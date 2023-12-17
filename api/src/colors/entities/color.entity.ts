import { Exclude, Expose } from 'class-transformer';
import { Prisma, Color } from '@prisma/client';
import { Name } from '../../common/entities/name.entity';

export class ColorEntity {
  id: number;
  color: string;
  color_name: Name;
  order?: number;
}
