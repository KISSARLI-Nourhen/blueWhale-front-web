import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Import_export } from 'src/app/model/Import_export.model';


@Injectable({
  providedIn: 'root'
})
export class ImportExportService {

  private baseUrl = environment.baseUrl;

  constructor(private http : HttpClient) { }

   /**
     * Import export
     */
    public getImport_export(): Observable<Import_export>{
      return this.http.get<Import_export>(this.baseUrl+"/import_exports");
    }

    public getProjectionImport_export(projection: any){
      let url = projection._links.import_export.href;
      url = url.replace("{?projection}", "");
      return this.http.get(url+"?projection=ImpoExpo");
    }

    public getAll(params: any): Observable<any> {
      return this.http.get<any>(this.baseUrl+"/import_exports", { params });
    }

}
