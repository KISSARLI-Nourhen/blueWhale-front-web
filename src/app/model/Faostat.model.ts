import { Country } from 'src/app/model/country.model';
import { Source } from 'src/app/model/source.model';
import { Product } from 'src/app/model/product.model';


export interface Faostat {
    id ?: number;
  	year ?: number;
  	area_harvested ?: number;
    unit_area ?: string;
  	yield ?: number;
  	unit_yield ?: string;
  	production ?: number;
  	unit_production ?: string;
  	date_modif ?: Date;
  	product ?: Product;
  	country ?: Country;
  	source ?: Source;

}
