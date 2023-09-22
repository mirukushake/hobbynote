import { Exclude, Expose } from 'class-transformer';
import { Brand } from 'src/common/entities/brand.entity';
import { Color } from 'src/common/entities/color.entity';
import { Pencil } from '@prisma/client';

export class PencilEntity implements Pencil {
  item_id: number;
  code: string;
  pencil_name: { en: string; ja: string };
  brand: Brand;
  order: number;
  color: Color;
  rgb: any;
  inv_qty: number;
  wish_qty: number;

  @Exclude()
  brand_id: number;

  @Exclude()
  series_id: number | null;

  @Exclude()
  color_id: number | null;

  @Expose()
  get background(): string {
    return `${this.rgb.r},${this.rgb.g},${this.rgb.b}`;
  }
}
