import { Name } from './name.entity';

export class Color {
  id: number;
  color: string;
  color_name: Name;
  order?: number;
}
