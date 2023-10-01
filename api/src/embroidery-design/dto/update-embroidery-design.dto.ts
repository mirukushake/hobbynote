import { PartialType } from '@nestjs/mapped-types';
import { CreateEmbroideryDesignDto } from './create-embroidery-design.dto';
import {
  IsNumber,
  IsOptional,
  IsString,
  Length,
  IsNotEmpty,
  IsArray,
} from 'class-validator';

export class UpdateEmbroideryDesignDto {
  @IsString()
  @Length(3, 255)
  @IsNotEmpty()
  title?: string;

  @IsOptional()
  @IsString()
  booktitle?: string;

  @IsOptional()
  @IsString()
  websiteurl?: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsString()
  finished_image?: string;

  @IsOptional()
  @IsString()
  pattern_image?: string;
}
