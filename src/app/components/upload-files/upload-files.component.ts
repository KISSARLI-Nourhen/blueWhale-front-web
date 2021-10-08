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
    var: Boolean = false;
   public refusedFaostat;
   public excel;
   public refusedComtrade;
    title ="Chargement des données dans la Base de données SQL Blue Whale";
    tmp : string;
//dropDownText
  Mysource = '0';
  selectedValue: any;

  data =[
      {id:0, name: 'selectionner la source'},
      {id:1, name: 'comtrade'},
      {id:2, name: 'resourcetradeearth'},
      {id:3, name: 'faostat'}
  ];


  constructor(private uploadService: UploadFileService) { }

   ngOnInit(): void {
      this.fileInfos = this.uploadService.getFiles();
      this.fileOutPutData = this.uploadService.getOutPutData();
      this.getDataRefused();
      this.tmp = "faostat";
   }

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
          this.getDataRefused();
        }
      },
      err => {
        this.message = 'Could not charge the DataBase ! Your file is not a valid document!';
        this.currentFile = undefined;
      });
      this.selectedFiles = undefined;
  }

  public getRefusedFaostat(filename: string){
    this.uploadService.getRefusedFaostat(filename).subscribe(data=>{
      this.refusedFaostat = data ;
      console.log(this.refusedFaostat);
    }, err=>{
      console.log("erreur de chargement");
    });
  }

  public getRefusedExcel(){
      this.uploadService.getRefusedExcel().subscribe(data=>{
        this.excel = data;
        console.log(this.excel);
      }, err=>{
        console.log("erreur de chargement");
      });
  }

  public getRefusedComtrade(){
      this.uploadService.getRefusedComtrade().subscribe(data=>{
        this.refusedComtrade = data ;
        console.log(this.refusedComtrade);
      }, err=>{
        console.log("erreur de chargement");
      });
  }

  public getDataRefused(){
    if(this.selectedValue == "resourcetradeearth"){
      this.getRefusedExcel();
    }
    else if(this.selectedValue == "faostat"){
       let filename= "faostat_DataRefused.csv";
       this.getRefusedFaostat(filename);
    }
    else if(this.selectedValue == "comtrade"){
     this.getRefusedComtrade();
    }
  }
  onChange($event){
   this.tmp = $event.target.options[$event.target.options.selectedIndex].text;
  }

}
