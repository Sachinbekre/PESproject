import { Injectable } from '@angular/core';
import { Ims } from './model/ims-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImsService {

  selectedworkOrder: Ims;
  ims: Ims[];
  baseUrl = 'http://localhost:3000/ims';
  constructor(private http: HttpClient) { }

  postIms(ims: Ims) {
    return this.http.post(this.baseUrl, ims);
  }
  getIms() {
    return this.http.get(this.baseUrl);
  }
  putIms(ims) {
    return this.http.put(this.baseUrl + `/${ims._id}`, ims);
  }
  deleteIms(_id: string) {
    // console.log(_id);
    return this.http.delete(this.baseUrl + `/${_id}`);
  }
}
