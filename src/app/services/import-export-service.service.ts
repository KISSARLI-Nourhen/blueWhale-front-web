import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImportExportComponent } from './components/import-export/import-export.component';


@Injectable({
  providedIn: 'root'
})
export class ImportExportServiceService {

  //private baseUrl = 'http://localhost:8081';

  constructor(/*private http:HttpClient*/) { }


  /*public getImportExports(){
    return this.http.get(this.baseUrl+"/import_exports")
  }*/
}
