import { PartialType } from '@nestjs/mapped-types';
import { CreatePencilDto } from './create-pencil.dto';

export class UpdatePencilDto extends PartialType(CreatePencilDto) {}
