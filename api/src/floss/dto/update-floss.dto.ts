import { PartialType } from '@nestjs/mapped-types';
import { CreateFlossDto } from './create-floss.dto';

export class UpdateFlossDto extends PartialType(CreateFlossDto) {}
