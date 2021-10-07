import {Country } from 'src/app/model/country.model';
import {World_language } from 'src/app/model/World_language.model';

export interface Country_translation {
    country_translation_id: number;
    //alpha2: string;
  	translation: string;
  	world_language: World_language ;
  	country: Country ;
}
