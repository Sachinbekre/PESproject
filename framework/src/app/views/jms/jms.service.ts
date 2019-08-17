import { Injectable } from '@angular/core';
import { Jms } from './model/jms-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JmsService {

  selectedworkOrder: Jms;
  jms: Jms[];
  baseUrl = 'http://localhost:3000/jms';
  constructor(private http: HttpClient) { }

  postJms(jms: Jms) {
    return this.http.post(this.baseUrl, jms);
  }
  getJms() {
    return this.http.get(this.baseUrl);
  }
  putJms(jms) {
    return this.http.put(this.baseUrl + `/${jms._id}`, jms);
  }
  deleteJms(_id: string) {
    // console.log(_id);
    return this.http.delete(this.baseUrl + `/${_id}`);
  }
}
