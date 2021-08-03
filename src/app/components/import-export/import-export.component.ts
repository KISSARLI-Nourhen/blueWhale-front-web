import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { ImportExportComponent } from './components/import-export/import-export.component';



@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.css']
})
export class ImportExportComponent implements OnInit {

  public importsExports;

  constructor(/*private ImportExportServiceService: importExportServiceService*/) { }


  ngOnInit() {
  /*this.importExportServiceService.getImportExports()
  .subscribe(data=>{
    this.importsExports=data;
  }, err=>{
    console.log(err);
  })*/
  }

}
