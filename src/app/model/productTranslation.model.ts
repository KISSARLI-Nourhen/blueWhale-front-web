import {Product} from 'src/app/model/product.model';
import {World_language} from 'src/app/model/World_language.model';

export interface Product_translation{
  product_translations_id?: number;
  translation: string;
  product: Product;
  world_language: World_language;

}
