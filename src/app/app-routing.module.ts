import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportExportComponent } from './components/import-export/import-export.component';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { TableReferenceComponent } from './components/table-reference/table-reference.component';
import { CountryComponent } from './components/country/country.component';
import { ProductComponent } from './components/product/product.component';
import { SourceComponent } from './components/source/source.component';
import { ProductionComponent } from './components/production/production.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { UserComponent } from './components/user/user.component';
import { DepartmentComponent } from './components/department/department.component';
import { RoleComponent } from './components/role/role.component';


const routes: Routes = [
  {
    path: "importExport",
    component: ImportExportComponent, data:{requiresLogin: true}
  },

  {
      path: "uploadFile",
      component: UploadFilesComponent, data:{requiresLogin: true}
  },

  {
      path: 'faostats',
      component: ProductionComponent, data:{requiresLogin: true}
  },
  {
    path: "tableReference",
    component: TableReferenceComponent, data:{requiresLogin: true},
    children: [
    {
    path:  'country',
    component: CountryComponent
    },
    {
    path:  'product',
    component: ProductComponent
    },
    {
    path:  'source',
    component: SourceComponent
    }
    ]
  },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'user', component: BoardUserComponent },
    { path: 'mod', component: BoardModeratorComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },


    {
        path: "admin",
        component: BoardAdminComponent,
        children: [
        {
        path:  'user',
        component: UserComponent
        },
        {
        path:  'department',
        component: DepartmentComponent
        },
        {
        path:  'role',
        component: RoleComponent
        }
        ]
    }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
