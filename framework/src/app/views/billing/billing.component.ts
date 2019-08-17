import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WorkOrderService } from '../work-order/work-order.service';
import { JmsService } from '../jms/jms.service';
import { ImsService } from '../ims/ims.service';
import { Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor(public workOrderService: WorkOrderService, public jmsService: JmsService,
    public imsService: ImsService, public router: Router) { }
  workOrderData;
  jmsData = [];
  imsData;
  tempWoNo = [];
  locationID = [];
  selectedWoNo;
  selectedlocationId;
  
  ngOnInit() {
    this.getWorkOrder();
    this.getJmsData();
    this.getImsData();
  }
  getWorkOrder() {
    const distinct = (value,index,self)=>{
      return self.indexOf(value) ===index;
    }
    this.workOrderService.getWorkOrder().subscribe((res) => {
      this.workOrderData = res;
      console.log(res)
      let WoNo = [];
      
      for (let index = 0; index < this.workOrderData.length; index++) {
        WoNo.push(this.workOrderData[index]['woNo']);
      }
      console.log(WoNo);
      this.tempWoNo = WoNo.filter(distinct)
      console.log('rsl',this.tempWoNo)
    });
  }
  getImsData() {

    this.imsService.getIms().subscribe((res) => {
      this.imsData = res;
      console.log(res)
      this.locationID = res as {}[];
      // for (let index = 0; index < this.imsData.length; index++) {
      //   this.locationID.push(this.imsData[index].locationId);

      // }
      console.log("Ims", this.imsData);
    });
  }
  getJmsData() {
    this.jmsService.getJms().subscribe((res) => {
      this.jmsData = res as {}[];
      console.log("jms", this.jmsData);
    });
  }
  sharedData;
  bill: boolean = true;
  x = [];
  y;
  myJson;
  generateBill() {
   
    console.log(this.selectedWoNo);
    console.log(this.selectedlocationId);
    let wrkOrderData = [];
    let ImsData = [];
    let finalJson;
    for (let index = 0; index < this.workOrderData.length; index++) {
      if (this.workOrderData[index]['woNo'] === this.selectedWoNo) {

        wrkOrderData.push(this.workOrderData[index])
      }
    }
    for (let index = 0; index < this.locationID.length; index++) {
      if (this.locationID[index]['locationId'] === this.selectedlocationId) {

        ImsData.push(this.locationID[index])
      }
    }
    finalJson = { 'wrkOrderData': wrkOrderData, 'ImsData': ImsData };
    localStorage.setItem('finalJson', JSON.stringify(finalJson));
     this.router.navigate(['/invoiceBill']);
    console.log('finalJson', finalJson)
  }




















  displayedColumns = ['item', 'description', 'UOM', 'rate', 'quantity', 'amount'];
  transactions = [
    { item: '222', description: 'very good', date: 24 / 12 / 2019, UOM: '3', rate: 20, quantity: 2, amount: 40 },
    { item: '3232', description: 'averege', date: 24 / 12 / 2019, UOM: '4', rate: 30, quantity: 2, amount: 60 },
    // {item: 'Beach ball',description:'very good',date:24/12/2019,UOM:'UOM Data' ,rate:25,quantity:5,amount: 4},
    // {item: 'Beach ball',description:'very good',date:24/12/2019,UOM:'UOM Data' ,rate:25,quantity:5,amount: 4},
    // {item: 'Towel',description:'very good', cost: 5},
    // {item: 'Frisbee',description:'very good', cost: 2},
    // {item: 'Sunscreen',description:'very good', cost: 4},
    // {item: 'Cooler',description:'very good', cost: 25},
    // {item: 'Swim suit',description:'very good', cost: 15},
  ];


  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  }
}
// export interface Transaction {
//   item: string;
//   description:string,
//   date:number,
//   UOM:string,
//   rate:number,
//   quantity:number,
//   amount: number;
// }