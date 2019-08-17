import { Injectable } from '@angular/core';
import { Workorder } from '../work-order/model/workorder';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  selectedworkOrder: Workorder;
  workOrder: Workorder[];
  baseUrl = 'http://localhost:3000/workOrder';
  baseUrl2 = 'http://localhost:3000/ims';
  baseUrl3 = 'http://localhost:3000/jms';
  constructor(private http: HttpClient) { }

  getWorkOrder() {
    return this.http.get(this.baseUrl);
  }
  getIms() {
    return this.http.get(this.baseUrl2);
  }
  getJms() {
    return this.http.get(this.baseUrl3);
  }
  
}
