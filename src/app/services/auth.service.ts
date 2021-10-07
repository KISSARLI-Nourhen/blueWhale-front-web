import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Department } from 'src/app/model/department.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
  };


@Injectable({
  providedIn: 'root'
})
export class AuthService {

private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  //methode for login
  login(username: string, password: string): Observable<any> {
      return this.http.post(this.baseUrl + '/api/auth/signin', {username,password}, httpOptions);
  }

  //methode for register
  register(first_name: string,last_name: string, passwords: string, email: string, department : Department): Observable<any> {
      return this.http.post(this.baseUrl + '/api/auth/signup', {
        first_name,
        last_name,
        passwords,
        email,
        department
      }, httpOptions);
  }

}
