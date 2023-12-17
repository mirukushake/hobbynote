import { Exclude, Expose } from 'class-transformer';
import { Prisma, Pigment, Watercolor } from '@prisma/client';

export class PigmentEntity implements Pigment {
  id: number;
  code: string;
  name: string;
  order: number;
  color_id: number;
  watercolors: Watercolor[];
}
