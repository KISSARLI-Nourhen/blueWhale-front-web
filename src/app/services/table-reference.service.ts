import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Country } from 'src/app/model/country.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
 import { map } from 'rxjs/operators';

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


}

