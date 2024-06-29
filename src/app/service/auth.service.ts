import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, User } from '../configration/config';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url: string = "http://192.168.234.112:5000";
  constructor(private http: HttpClient) { }

  addUser(body: User) {
    return this.http.post(this.url + '/user/postUser', body);
  }

  GetUser() {
    return this.http.get(this.url + '/user');
  }

  loginUser(body: Login) {
    return this.http.get(`http://192.168.234.112:5000/user/login?email=${body.email}&password=${body.password}`);
  }
  // loginUser(body: any) {
  //   return this.http.get(`http://192.168.234.112:5000/user/login`, body);
  // }
}
