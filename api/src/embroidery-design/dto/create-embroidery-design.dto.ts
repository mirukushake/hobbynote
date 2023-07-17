import {
  IsNumber,
  IsOptional,
  IsString,
  Length,
  IsNotEmpty,
} from 'class-validator';
export class CreateEmbroideryDesignDto {
  @IsString()
  @Length(1, 255)
  @IsNotEmpty()
  title: string;

  @IsString()
  floss: string;

  @IsOptional()
  @IsString()
  booktitle?: string;

  @IsOptional()
  @IsString()
  websiteurl?: string;

  @IsOptional()
  @IsString()
  finishedimage?: string;

  @IsOptional()
  @IsString()
  designimage?: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsString()
  status_id?: string;
}
