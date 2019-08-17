import { Injectable } from '@angular/core';
import { Workorder } from './model/workorder';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {

  selectedworkOrder: Workorder;
  workOrder: Workorder[];
  baseUrl = 'http://localhost:3000/workOrder';
  constructor(private http: HttpClient) { }

  postWorkOrder(wo: Workorder) {
    console.log("service",wo);
    return this.http.post(this.baseUrl, wo);
  }
  getWorkOrder() {
    return this.http.get(this.baseUrl);
  }
  putWorkOrder(wo) {
    return this.http.put(this.baseUrl + `/${wo._id}`, wo);
  }
  deleteWorkOrder(_id: string) {
    // console.log(_id);
    return this.http.delete(this.baseUrl + `/${_id}`);
  }
}
