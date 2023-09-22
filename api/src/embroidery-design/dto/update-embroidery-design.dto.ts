import { PartialType } from '@nestjs/mapped-types';
import { CreateEmbroideryDesignDto } from './create-embroidery-design.dto';

export class UpdateEmbroideryDesignDto extends PartialType(CreateEmbroideryDesignDto) {}
