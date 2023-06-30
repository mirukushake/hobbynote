import { IsInt, IsNumber, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreatePencilDto } from './create-pencil.dto';

export class UpdatePencilDto extends PartialType(CreatePencilDto) {
  @IsOptional()
  @IsNumber()
  inv_qty: number;

  @IsOptional()
  @IsNumber()
  wish_qty: number;
}
