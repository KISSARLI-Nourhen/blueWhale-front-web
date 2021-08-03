import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
//import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  private baseUrl = 'http://localhost:8081';

  constructor(private http:HttpClient) { }

   upload(file: File): Observable<HttpEvent<any>> {
      const formData: FormData = new FormData();

      formData.append('file', file);

      const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
        reportProgress: true,
        responseType: 'json'
      });

      return this.http.request(req);
    }

    getFiles(): Observable<any> {
        return this.http.get(`${this.baseUrl}/files`);
    }

    getOutPutData(): Observable<any> {
            return this.http.get(`${this.baseUrl}/files/outputData`);
        }

    //getDropDownText
    getDropDownText(id, object){
      const selObj = _.filter(object, function (o) {
              return (_.includes(id,o.id));
          });
          return selObj;
    }

    //charge DB with differents source
    uploadDB(file: File, sourceName: String): Observable<HttpEvent<any>> {
          const formData: FormData = new FormData();

          formData.append('file', file);

          const req = new HttpRequest('POST', `${this.baseUrl}/upload/`+sourceName, formData, {
            reportProgress: true,
            responseType: 'json'
          });

          return this.http.request(req);
        }

    //fonction pour afficher les données refusés de la source faostat
    public getRefusedData() : Observable<any>{
       return this.http.get(`${this.baseUrl}/readOutPutData`);
    }

}
