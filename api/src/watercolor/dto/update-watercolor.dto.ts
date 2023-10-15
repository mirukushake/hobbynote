import { PartialType } from '@nestjs/mapped-types';
import { CreateWatercolorDto } from './create-watercolor.dto';

export class UpdateWatercolorDto extends PartialType(CreateWatercolorDto) {}
