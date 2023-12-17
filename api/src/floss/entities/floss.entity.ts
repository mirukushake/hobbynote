import { Exclude, Expose } from 'class-transformer';
import { Brand } from 'src/common/entities/brand.entity';
import { ColorEntity } from 'src/colors/entities/color.entity';
import { Floss } from '@prisma/client';
import { RGB } from 'src/common/entities/rgb.entity';

export class FlossEntity implements Floss {
  item_id: number;
  code: string;
  floss_name: { en: string; ja: string };
  brand: Brand;
  order: number;
  color: ColorEntity;

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
