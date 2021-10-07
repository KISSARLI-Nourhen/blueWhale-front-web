import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Role } from 'src/app/model/role.model';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm }   from '@angular/forms';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

    public roles;
    public editRole : any;
    public delRole : any;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  //role component
  public getRoles(): void{
    this.userService.getRoles().subscribe(data=>{
        this.roles=data;
        console.log(this.roles);
        }, err=>{
        console.log("erreur de chargement")
    })
  }

  public  addRole(addForm: NgForm): void{
    document.getElementById('add-role-form').click();
    this.userService.addRole(addForm.value).subscribe(
    response=>{
      this.getRoles();
      console.log(addForm);
      console.log(addForm.value);
      addForm.reset();
    },
    (error)=>{
      console.log("erreur chargement");
      addForm.reset();
    })
  }

  public updateRole(role: string[]) {
     document.getElementById('update-role-form').click();
       this.userService.updateRole(role).subscribe(response=>{
        this.getRoles();
       }, err=>{
        console.log("erreur chargement");
     })
  }

  public  deleteRole(roleId: number): void{
  document.getElementById('delete-role-form').click();
     this.userService.deleteRole(roleId).subscribe(
     response=>{
       this.getRoles();
     },
     (error)=>{
       console.log("erreur chargement");
     });
  }

  //methode for get role thant we want to update and delete
  public getRoleClicked(role: string[]){
      this.editRole = role;
      this.delRole = role;
  }

  public onSearchRole(key: string): void{
    const results: Role[] =[];
    for(const r of this.roles){
      if(r.name.toUpperCase().indexOf(key.toUpperCase())){
          results.push(r);
      }
    }
    this.roles = results;
    if(results.length === 0 || !key){
      this.getRoles();
    }
  }


}
