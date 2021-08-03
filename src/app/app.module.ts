import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImportExportComponent } from './components/import-export/import-export.component';
import { TableReferenceComponent } from './components/table-reference/table-reference.component';
import { CountryComponent } from './components/country/country.component';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [
    AppComponent,
    UploadFilesComponent,
    ImportExportComponent,
    TableReferenceComponent,
    CountryComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
