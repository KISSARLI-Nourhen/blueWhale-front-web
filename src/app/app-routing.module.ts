import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportExportComponent } from './components/import-export/import-export.component';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { TableReferenceComponent } from './components/table-reference/table-reference.component';


const routes: Routes = [
  {
    path: "importExport",
    component: ImportExportComponent
  },

  {
      path: "uploadFile",
      component: UploadFilesComponent
    },
  {
    path: "tableReference",
    component: TableReferenceComponent
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
