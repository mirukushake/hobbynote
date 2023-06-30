import { IsInt, IsNumber, IsOptional } from 'class-validator';
export class CreatePencilDto {
  @IsNumber()
  inv_qty: number;
}
