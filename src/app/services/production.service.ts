import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Faostat } from 'src/app/model/Faostat.model';


@Injectable({
  providedIn: 'root'
})
export class ProductionService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  /**
  * Faostat
  */
 public getFaostat(): Observable<Faostat>{
    return this.http.get<Faostat>(this.baseUrl+"/faostats");
 }

 public getProjectionFaostat(projection : any){
    let url = projection._links.faostat.href;
    url = url.replace("{?projection}", "");
    return this.http.get(url+"?projection=faostat");
 }

  public getAll(params: any): Observable<any> {
      return this.http.get<any>(this.baseUrl+"/faostats", { params });
  }

}
