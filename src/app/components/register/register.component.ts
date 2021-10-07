import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public departments;

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
  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.getDepartments();

  }

   onSubmit(): void {
      const { first_name,last_name, passwords, email, department } = this.form;
      this.authService.register(first_name,last_name, passwords, email, department ).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
   }

  public getDepartments(): void{
    this.userService.getDepartments().subscribe(data=>{
      this.departments=data;
       console.log(this.departments);
      }, err=>{
      console.log("erreur de chargement")
      })
  }

}
