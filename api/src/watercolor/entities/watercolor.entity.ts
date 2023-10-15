import { Exclude, Expose } from 'class-transformer';
import { Brand } from 'src/common/entities/brand.entity';
import { Color } from 'src/common/entities/color.entity';
import { Prisma, Watercolor, Pigment } from '@prisma/client';

export class WatercolorEntity implements Watercolor {
  item_id: number;
  code: string;
  swatch: string;
  paint_name: { en: string; ja: string };
  brand: Brand;
  color_id: number;
  color: Color;
  sizes: number[];
  order: number;
  grade: string;
  inv_qty: number;
  wish_qty: number;
  pigments: Pigment[];

  @Exclude()
  brand_id: number;

  @Exclude()
  series_id: number | null;
}
