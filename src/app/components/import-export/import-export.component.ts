import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {Observable} from 'rxjs';
import { ImportExportService } from 'src/app/services/import-export.service';
import { Import_export } from 'src/app/model/Import_export.model';


@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.css']
})

export class ImportExportComponent implements OnInit {

  public projectionIE =[];
  Import_exports : Import_export[] = [];
      currentIE?: Import_export;
      currentIndex = -1;
      title = '';

      page = 1;
      count = 0;
      pageSize = 20;
      pageSizes = [20, 30, 50, 100];

  constructor(private importExportService : ImportExportService) { }

  ngOnInit() {
    console.log("importsExports");
    this.getImport_export();
    this.retrieveIE();
  }

  /*public getImport_export() : void{
    this.importExportService.getImport_export().subscribe(data=>{
      this.importsExports = data;
      this.importsExports._embedded.import_exports.forEach(IE =>{
        this.importExportService.getProjectionImport_export(IE).subscribe(
        d=>{
          this.projectionIE.push(d);
        }, error =>{
          console.log("erreur de projection");
        });
      })
      console.log("projection import export");
      console.log(this.projectionIE);
    },
    error=>{
      console.log("erreur de chargement");
    });
  }*/

  public getImport_export(): void {
      this.importExportService.getImport_export().subscribe(data=>{
      this.Import_exports.push(data);
      console.log(this.Import_exports);
      }, error =>{
        console.log("erreur de chargement");
      });
  }

  public getRequestParams(page: number, pageSize: number): any {
        // tslint:disable-next-line:prefer-const
        let params: any = {};
        if (page) {
          params[`page`] = page - 1;
        }
        if (pageSize) {
          params[`size`] = pageSize;
        }
        return params;
  }

   public retrieveIE(): void {
      const params = this.getRequestParams(this.page, this.pageSize);

      this.importExportService.getAll(params)
      .subscribe(
        response => {
          const { Import_exports, totalItems } = response;
          this.Import_exports = Import_exports;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
      });
   }

    public handlePageChange(event: number): void {
        this.page = event;
        this.retrieveIE();
    }

     public handlePageSizeChange(event: any): void {
        this.pageSize = event.target.value;
        this.page = 1;
        this.retrieveIE();
     }
    public refreshList(): void {
      this.retrieveIE();
      this.currentIE = undefined;
      this.currentIndex = -1;
    }

}
