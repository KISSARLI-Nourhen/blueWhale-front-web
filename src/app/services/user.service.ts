import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/model/user.model';
import { Department } from 'src/app/model/department.model';


const baseUrl = environment.baseUrl;

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
  };

@Injectable({
  providedIn: 'root'
})
export class UserService {

private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  /*getPublicContent(): Observable<any> {
      return this.http.get(baseUrl + '/api/test/all', { responseType: 'text' });
  }

    getUserBoard(): Observable<any> {
      return this.http.get(baseUrl + '/api/test/user', { responseType: 'text' });
  }

    getModeratorBoard(): Observable<any> {
      return this.http.get(baseUrl + '/api/test/mod', { responseType: 'text' });
  }*/

    getAdminBoard(): Observable<any> {
      return this.http.get(baseUrl + '/api/test/admin', { responseType: 'text' });
  }

  //user service
  public getUsers(){
    return this.http.get(this.baseUrl+"/listUsers");
  }

  public addUser(first_name: string,last_name: string, passwords: string, email: string, department : Department): Observable<any> {
     return this.http.post(this.baseUrl + '/api/auth/signup', {
       first_name,
       last_name,
       passwords,
       email,
       department
     }, httpOptions);
 }

 public updateUser(user: User): Observable<any>{
    return this.http.put<User>(this.baseUrl+"/updateUser", user, httpOptions);
   }


  public deleteUser(userId: number){
     return this.http.delete(this.baseUrl+"/deleteUser/"+userId);
  }

  public searchCountry(keyword:string){
    return this.http.get(this.baseUrl+"/listUsers?user_name_like="+keyword)
  }


  //department service
   public getDepartments(){
     return this.http.get(this.baseUrl+"/listdepartments");
   }

   public addDepartment(department: Department){
     return this.http.post(this.baseUrl+"/addDepartment", department);
   }

   public updateDepartment(department: Department){
    return this.http.put<Department>(this.baseUrl+"/updateDepartment", department);
   }
   public deleteDepartment(departmentId: number){
      return this.http.delete(this.baseUrl+"/deletedepartment/"+ departmentId);
   }

   public searchDepartment(keyword:string){
     return this.http.get(this.baseUrl+"/listdepartments?department_name_like="+ keyword);
   }


  //role service
  public getRoles(){
    return this.http.get(this.baseUrl+"/listRoles");
  }

  public addRole(role: any){
    return this.http.post(this.baseUrl+"/addRole", role);
  }

  public updateRole(role: any){
   return this.http.put<any>(this.baseUrl+"/updateRole", role);
  }
  public deleteRole(roleId: number){
     return this.http.delete(this.baseUrl+"/deleteRole"+ roleId);
  }

  public searchRole(keyword:string){
    return this.http.get(this.baseUrl+"/listroles?name_like="+ keyword);
  }
}
