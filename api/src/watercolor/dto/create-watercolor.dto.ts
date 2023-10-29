import { IsInt, IsNumber, IsOptional } from 'class-validator';

export class CreateWatercolorDto {
  @IsOptional()
  @IsNumber()
  inv_qty: number;

  @IsOptional()
  @IsNumber()
  wish_qty: number;
}