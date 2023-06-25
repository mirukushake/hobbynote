import { Country } from './country.entity';
import { Name } from './name.entity';

export class Brand {
  id: number;
  country_id: number;
  brand_name: Name;
  country?: Country;
}
