import { Floss, EmbroideryDesign } from '@prisma/client';

export class DesignEntity implements EmbroideryDesign {
  id: number;
  title: string;
  finished_image: string;
  pattern_image: string;
  book_title: string;
  website_url: string;
  notes: string;
  floss: Floss;
}
