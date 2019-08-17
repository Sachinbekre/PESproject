import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './model/login-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: Login[];
  baseUrl = 'http://localhost:3000/login';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.baseUrl);
  }
  
  postUsers(users) {
    // console.log(users);
    return this.http.post(this.baseUrl,users);
  }
}
