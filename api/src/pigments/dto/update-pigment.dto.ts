import { PartialType } from '@nestjs/mapped-types';
import { CreatePigmentDto } from './create-pigment.dto';

export class UpdatePigmentDto extends PartialType(CreatePigmentDto) {}
