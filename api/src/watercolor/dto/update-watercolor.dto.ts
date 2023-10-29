import { PartialType } from '@nestjs/mapped-types';
import { CreateWatercolorDto } from './create-watercolor.dto';
import {
  IsNumber,
  IsOptional,
  IsString,
  Length,
  IsNotEmpty,
} from 'class-validator';

export class UpdateWatercolorDto extends PartialType(CreateWatercolorDto) {
  @IsOptional()
  @IsNumber()
  inv_qty: number;

  @IsOptional()
  @IsNumber()
  wish_qty: number;

  @IsOptional()
  @IsNumber()
  pigments?: number[];
}
