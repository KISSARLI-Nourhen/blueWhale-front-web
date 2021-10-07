import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user.model';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm }   from '@angular/forms';
import {Observable} from 'rxjs';
import { UserComponent } from 'src/app/components/user/user.component';
import { DepartmentComponent } from 'src/app/components/department/department.component';
import { RoleComponent } from 'src/app/components/role/role.component';


@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})

export class BoardAdminComponent implements OnInit {

@ViewChild(UserComponent) userChild: UserComponent;
@ViewChild(DepartmentComponent) departmentChild: DepartmentComponent;
@ViewChild(RoleComponent) roleChild: RoleComponent;

     showUser: boolean = true;
     showDepartment: boolean = true;
     showRole: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //this.userService.getUsers();
  }

  public reset(){
    this.showUser=true;
    this.showDepartment=true;
    this.showRole=true;

  }

  public getChild(event): void{
    var idButton = event.target.attributes.id.nodeValue;
     if(idButton === "btnUser"){
         this.getUsersChild();
     }
      else if (idButton === "btnDepartment"){
         this.getDepartmentsChild();
     }
     else if(idButton === "btnRole"){
          this.getRolesChild();
     }
  }

  public getUsersChild(): void{
     this.showUser = true;
     this.showDepartment = false;
     this.showRole = false;
     this.userChild.getUsers();
  }

  public getDepartmentsChild(): void{
     this.showDepartment = true;
     this.showUser = false;
     this.showRole = false;
     this.departmentChild.getDepartments();
  }

  public getRolesChild(): void {
      this.showUser = false;
      this.showDepartment = false;
      this.showRole = true;
      this.roleChild.getRoles();
  }



}
