import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Country } from 'src/app/model/country.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product }  from "src/app/model/product.model";
import { Source } from "src/app/model/source.model";
import { Product_translation } from 'src/app/model/productTranslation.model';
import { World_language } from 'src/app/model/World_language.model';
import { Country_translation } from 'src/app/model/Country_translation.model';
import { Faostat } from 'src/app/model/Faostat.model';


@Injectable({
  providedIn: 'root'
})
export class TableReferenceService {

  private baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

//country service
  public getCountries(){
    return this.http.get(this.baseUrl+"/listcountries");
  }

  public addCountry(country: Country){
    return this.http.post(this.baseUrl+"/addCountry", country);
  }

  public updateCountry(country: Country){
   return this.http.put<Country>(this.baseUrl+"/updateCountry", country);
  }
  public deleteCountry(countryId: number){
     return this.http.delete(this.baseUrl+"/deleteCountry/"+countryId);
  }

  public searchCountry(keyword:string){
    return this.http.get(this.baseUrl+"/listcountries?country_name_like="+keyword)
  }


//product service

  public getProducts(): Observable<Product>{
    return this.http.get<Product>(this.baseUrl+"/listproducts");
  }

  public addProduct(product: Product){
    return this.http.post(this.baseUrl+"/addProduct", product);
  }

  public updateProduct(product: Product){
    return this.http.put<Product>(this.baseUrl+"/updateProduct", product);
  }

  public deleteProduct(productId: number){
    return this.http.delete(this.baseUrl+"/deleteProduct/"+ productId);
  }

//source service
  public getSources(): Observable<Source[]>{
    return this.http.get<Source[]>(this.baseUrl+"/listesources");
  }

  public addSource(source: Source): Observable<Source>{
    return this.http.post<Source>(this.baseUrl+"/addSource", source);
  }

  public updateSource(source: Source): Observable<Source>{
    return this.http.put<Source>(this.baseUrl+"/updateSource", source);
  }

  public deleteSource(source_id: number): Observable<Source>{
    return this.http.delete<Source>(this.baseUrl+"/deleteSource/"+source_id);
  }

  //product translation service

  public getProductTranslations(): Observable<Product_translation[]>{
    return this.http.get<Product_translation[]>(this.baseUrl+"/product_translations");
  }

  public getProdTranslated(pt: any){
      let url=pt._links.product_translation.href;
      url=url.replace("{?projection}","");
    return this.http.get(url+"?projection=pt");
  }

  public addPt(product_translation: Product_translation): Observable<Product_translation>{
    return this.http.post<Product_translation>(this.baseUrl+"/addProductTranslation", product_translation);
  }

  /*public createPT(PT: Product_translation): Observable<Object>{
    return this.http.post<Product_translation>(this.baseUrl+"/createProductTranslation",PT);
  }*/

  public updatePT(pt: Product_translation): Observable<Product_translation>{
    return this.http.put<Product_translation>(this.baseUrl+"/updateProductTranslation", pt);
  }

  public deletePT(pt_id: number): Observable<Product_translation>{
      return this.http.delete<Product_translation>(this.baseUrl+"/deleteProductTranslation/"+pt_id);
  }


    /**
    * country translation
    */
  public getCountryTranslations(): Observable<Country_translation[]>{
    return this.http.get<Country_translation[]>(this.baseUrl+"/country_translations");
  }
  public getCountryProjection(ct: any){
        let url=ct._links.country_translation.href;
        url=url.replace("{?projection}","");
      return this.http.get(url+"?projection=ct");
    }

  public addCountryTranslations(country_translation: Country_translation): Observable<Country_translation>{
    return this.http.post<Country_translation>(this.baseUrl+"/addCountryTranslation", country_translation);
  }

  public updateCountryTranslations(country_translation: Country_translation): Observable<Country_translation>{
    return this.http.put<Country_translation>(this.baseUrl+"/updateCountryTranslation", country_translation);
  }

  public deleteCountryTranslations(CT_id: number): Observable<Country_translation>{
    return this.http.delete<Country_translation>(this.baseUrl+"/deleteCountryTranslation/"+CT_id);
  }

  // word language service
  public getLanguages(): Observable<World_language[]>{
      return this.http.get<World_language[]>(this.baseUrl+"/listlanguages");
  }






}

