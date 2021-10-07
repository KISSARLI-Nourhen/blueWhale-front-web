import {Country} from 'src/app/model/country.model';
import {Product} from 'src/app/model/product.model';
import {Source} from 'src/app/model/source.model';


export interface Import_export{

   id: number;
 	 trade_flow : string;
 	 years: number;
 	 months: string;
 	 value : number;
 	 unit_value : string;
 	 netweight : number;
 	 unit_netweight : string;
 	 date_modif: Date;
 	 country_expo : Country;
 	 country_impo : Country;
 	 product : Product;
 	//public variety : Variety;
 	 source : Source;

}
