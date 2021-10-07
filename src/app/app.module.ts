import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
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
import { SourceComponent } from './components/source/source.component';
import { ProductTranslationComponent } from './components/product-translation/product-translation.component';
import { CountryTranslationComponent } from './components/country-translation/country-translation.component';
import { ProductionComponent } from './components/production/production.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';

import { authInterceptorProviders } from './helpers/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';
import { DepartmentComponent } from './components/department/department.component';
import { UserComponent } from './components/user/user.component';
import { RoleComponent } from './components/role/role.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadFilesComponent,
    ImportExportComponent,
    TableReferenceComponent,
    CountryComponent,
    ProductComponent,
    SourceComponent,
    ProductTranslationComponent,
    CountryTranslationComponent,
    ProductionComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    RegisterComponent,
    DepartmentComponent,
    UserComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],

  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }
