import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Department } from 'src/app/model/department.model';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm }   from '@angular/forms';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

    public departments;
    public editDepartment: Department;
    public delDepartment: Department;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }


  //Department component
    public getDepartments(): void{
      this.userService.getDepartments().subscribe(data=>{
          this.departments=data;
           console.log(this.departments);
          }, err=>{
          console.log("erreur de chargement")
          })
    }

    public  addDepartment(addForm: NgForm): void{
      document.getElementById('add-department-form').click();
      this.userService.addDepartment(addForm.value).subscribe(
      response=>{
        this.getDepartments();
        console.log(addForm);
        console.log(addForm.value);
        addForm.reset();
      },
      (error)=>{
        console.log("erreur chargement");
        addForm.reset();
      })
    }

    public updateDepartment(department: Department) {
       document.getElementById('update-department-form').click();
         this.userService.updateDepartment(department).subscribe(response=>{
          this.getDepartments();
         }, err=>{
          console.log("erreur chargement");
         })
    }

   public  deleteDepartment(departmentId: number): void{
    document.getElementById('delete-department-form').click();
       this.userService.deleteDepartment(departmentId).subscribe(
       response=>{
         this.getDepartments();
       },
       (error)=>{
         console.log("erreur chargement");
       });
      }

  //methode for get department thant we want to update and delete
  public getDepartmentClicked(department: Department){
      this.editDepartment = department;
      this.delDepartment = department;
  }

  public onSearchDepartment(key: string): void{
        const results: Department[] =[];
        for(const d of this.departments){
          if(d.department_name.toLowerCase().indexOf(key.toLowerCase()) != -1){
              results.push(d);
          }
        }
        this.departments = results;
        if(results.length === 0 || !key){
          this.getDepartments();
        }
  }

}
