import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {
    selectedFiles: FileList;
    currentFile: File;
    progress = 0;
    message = '';
    fileInfos: Observable<any>;
    fileOutPutData: Observable<any>;
   public refusedData;
    title ="Chargement des données dans la Base de données SQL Blue Whale";

  constructor(private uploadService: UploadFileService) { }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }

  //dropDownText
  Mysource = '0';
  selectedValue: any;

  data =[
    {id:0, name: 'selectionner la source'},
    {id:1, name: 'comtrade'},
    {id:2, name: 'resourcetradeearth'},
    {id:3, name: 'faostat'}
  ];

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
    this.fileOutPutData = this.uploadService.getOutPutData();
    this.getRefusedData();
  }

  selectChange(){
    this.selectedValue = this.uploadService.getDropDownText(this.Mysource, this.data)[0].name;
  }

  //charger la DB
  uploadDB() {


      this.uploadService.uploadDB(this.currentFile, this.selectedValue).subscribe(
        event => {
             if (event.type === HttpEventType.UploadProgress) {
                  this.progress = Math.round(100 * event.loaded / event.total);
             } else if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.fileInfos = this.uploadService.getFiles();
            this.fileOutPutData = this.uploadService.getOutPutData();
            this.getRefusedData();
          }
        },
        err => {
          this.message = 'Could not charge the DataBase ! Your file is not a valid document!';
          this.currentFile = undefined;
        });

      this.selectedFiles = undefined;
    }

    public getRefusedData(){

      this.uploadService.getRefusedData().subscribe(data=>{
        this.refusedData = data;
        console.log(this.refusedData);
      }, err=>{
        console.log("erreur de chargement");
      });
    }

}
