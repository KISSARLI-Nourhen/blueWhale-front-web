import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user.model';
import { Role } from 'src/app/model/role.model';
import { Department } from 'src/app/model/department.model';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm }   from '@angular/forms';
import {Observable} from 'rxjs';
import { TokenStorageService } from 'src/app/services/token-storage.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users;
  public editUser: User;
  public delUser: User;
  public departments;
  public roles = [];
  currentUser: any;


  form: any = {
  first_name: null,
  last_name: null,
  passwords: null,
  email: null,
  department: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private userService: UserService, private tokenStorage: TokenStorageService ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getDepartments();
    this.getRoles();


  }

  //user component
  public getUsers(): void{
    this.userService.getUsers().subscribe(data=>{
        this.users=data;
        console.log("users");
         console.log(this.users);
        }, err=>{
        console.log("erreur de chargement")
    })
  }

  public addUser(): void {
    document.getElementById('add-user-form').click();
    const { first_name,last_name, passwords, email, department } = this.form;
    this.userService.addUser(first_name,last_name, passwords, email, department ).subscribe(
      data => {
        console.log(data);
         this.getUsers();
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  public updateUser(user : User): void {
      document.getElementById('update-user-form').click();

      this.userService.updateUser(user).subscribe(
        data => {
          console.log(data);
           this.getUsers();
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
  }

  /*public updateUser(user: User) {
     document.getElementById('update-user-form').click();
       this.userService.updateUser(user).subscribe(response=>{
        this.getUsers();
       }, err=>{
        console.log("erreur chargement");
     })
  }*/

 public  deleteUser(userId: number): void{
  document.getElementById('delete-user-form').click();
     this.userService.deleteUser(userId).subscribe(
     response=>{
       this.getUsers();
     },
     (error)=>{
       console.log("erreur chargement");
     });
  }

  //methode for get user that we want to update and delete
  public getUserClicked(user: User){
      this.editUser = user;
      this.delUser = user;
  }

  public onSearchUser(key: string): void{
    const results: User[] =[];
    for(const u of this.users){
      if(u.first_name.toLowerCase().indexOf(key.toLowerCase()) != -1 || u.last_name.toLowerCase().indexOf(key.toLowerCase()) != -1
      || u.email.toLowerCase().indexOf(key.toLowerCase()) != -1){
          results.push(u);
      }
    }
    this.users = results;
    if(results.length === 0 || !key){
      this.getUsers();
    }
  }

  public getDepartments(): void{
    this.userService.getDepartments().subscribe(
      data=>{
        this.departments = data;
        console.log("departments");
        console.log(this.departments);
      }, error=>{
        console.log("erreur de chargement");
    });
  }


  public getRoles(): void{
    this.userService.getRoles().subscribe(data=>{
        this.roles.push(data);
         console.log(this.roles);
        }, err=>{
        console.log("erreur de chargement")
    });
  }

}
