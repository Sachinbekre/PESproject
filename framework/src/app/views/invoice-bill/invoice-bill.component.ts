import { Component, OnInit } from '@angular/core';

export interface Transaction {
  item: string;
  description:string,
  date:number,
  UOM:string,
  rate:number,
  quantity:number,
  amount: number;
}


@Component({
  selector: 'app-invoice-bill',
  templateUrl: './invoice-bill.component.html',
  styleUrls: ['./invoice-bill.component.css']
})
export class InvoiceBillComponent implements OnInit {
finalData;
finalData2=[];
WRK_NO;
LOCATION;
DATE;
displayData=[];
  constructor() {
   
   }

  ngOnInit() {
    this.finalData  = JSON.parse(localStorage.getItem('finalJson'));
    this.finalData2.push(JSON.parse(localStorage.getItem('finalJson')));
    console.log('finalJson', this.finalData);
    console.log('filter', this.finalData['ImsData']['0'].locationName);
    this.WRK_NO = this.finalData['wrkOrderData']['0'].woNo;
    this.LOCATION =  this.finalData['ImsData']['0'].locationName;
    this.DATE =  this.finalData['ImsData']['0'].startDate;
    this.refreshData();
    this.getTotalCost();

  }
  refreshData(){
    let x;
    let y;
    for (let index = 0; index < this.finalData2.length; index++) {
      this.displayData = this.finalData2[index]['wrkOrderData'];
      }
      console.log(x);
      console.log("final Data",this.displayData);
  }
  
  displayedColumns = ['item','description', 'UOM','rate','quantity','amount'];
  transactions: Transaction[] = [
    {item: 'Beach ball',description:'very good',date:24/12/2019,UOM:'UOM Data' ,rate:25,quantity:5,amount: 4},
    {item: 'Beach ball',description:'very good',date:24/12/2019,UOM:'UOM Data' ,rate:25,quantity:5,amount: 5},
    {item: 'Beach ball',description:'very good',date:24/12/2019,UOM:'UOM Data' ,rate:25,quantity:5,amount: 4},
    {item: 'Beach ball',description:'very good',date:24/12/2019,UOM:'UOM Data' ,rate:25,quantity:5,amount: 4},
    // {item: 'Towel',description:'very good', cost: 5},
    // {item: 'Frisbee',description:'very good', cost: 2},
    // {item: 'Sunscreen',description:'very good', cost: 4},
    // {item: 'Cooler',description:'very good', cost: 25},
    // {item: 'Swim suit',description:'very good', cost: 15},
  ];

 
  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.displayData.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  }
  print(){
    window.print();
  }
}
