import { Exclude } from 'class-transformer';
import { Floss, EmbroideryDesign } from '@prisma/client';
import { Status } from 'src/common/entities/status.entity';

export class DesignEntity implements EmbroideryDesign {
  id: number;
  title: string;
  finished_image: string;
  pattern_image: string;
  book_title: string;
  website_url: string;
  notes: string;
  floss: Floss;
  status: Status;
  created: Date;
  updated: Date;

  @Exclude()
  status_id: number;
}
