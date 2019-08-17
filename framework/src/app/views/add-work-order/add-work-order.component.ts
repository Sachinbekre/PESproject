import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WorkOrderService } from '../work-order/work-order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-work-order',
  templateUrl: './add-work-order.component.html',
  styleUrls: ['./add-work-order.component.css']
})
export class AddWorkOrderComponent implements OnInit {
  itemCode;
  woNo;
  description;
  uom;
  qty;
  rate;
  amount;
  data;
  tempData;
  pId;
  updateHide: boolean = false;
  constructor(
    private toastr: ToastrService,
    public ActiveRouter: ActivatedRoute,
    public workOrderservice: WorkOrderService
  ) {
  }
  ngOnInit() {
    this.ActiveRouter.queryParams
      .subscribe(params => {
        this.pId = params.id;
        if (this.pId) {
          this.updateHide = true;
        }
      });
    this.refreshPatients();
  }
  createWorkOrder(form: NgForm){
    console.log(form.value);
    const formData = form.value;
    formData._id = this.pId;
    if (this.updateHide == false) {
    console.log(form.value);
    this.workOrderservice.postWorkOrder(formData).subscribe((res)=>{
      this.toastr.success("added Successfully", "Success!");
      form.resetForm();
      // this.refreshPatients();
    });
  }else{
    this.workOrderservice.putWorkOrder(formData).subscribe((res) =>{
      console.log("iam update");
      this.toastr.success("update Successfully", "Success!");
      form.resetForm();
    })
  }
  }
  // registerPatient(form: NgForm) {
  //   const formData = form.value;
  //   formData._id = this.pId;

  //   if ((formData.id === undefined && formData.name === undefined && formData.dob === undefined && formData.mobileNo === undefined) ||
  //     (formData.id === null && formData.name === null && formData.dob === null && formData.mobileNo === null)) {
  //     // alert('Eneter minimal info');
  //     this.showwarning('Warning', 'not added! Add minimal Info');
  //   } else {
  //     if (this.updateHide == false) {
  //       console.log("iam create");
  //       this.addPatient.postPatients(formData).subscribe((res) => {
  //         // console.log("Save success");
  //         this.showSuccess('successfully', 'added');
  //         this.resetForm(form);
  //         this.refreshPatients();
  //       });
  //     } else {
  //       console.log("iam update");
  //       this.addPatient.putPatients(formData).subscribe((res) => {
  //         this.resetForm(form);
  //       })
  //     }
  //   }

  // }
  refreshPatients() {
    this.workOrderservice.getWorkOrder().subscribe((res) => {
      this.data = res;
      for (let index = 0; index < this.data.length; index++) {
        if (this.data[index]._id == this.pId) {
          this.woNo = this.data[index].woNo;
          this.itemCode = this.data[index].itemCode;
          this.description = this.data[index].description,
            this.uom = this.data[index].uom,
            this.qty = this.data[index].qty,
            this.rate = this.data[index].rate,
            this.amount = this.data[index].amount
        }
      }
    });
  }
}
