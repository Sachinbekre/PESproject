import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { JmsService } from '../jms/jms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-jms',
  templateUrl: './add-jms.component.html',
  styleUrls: ['./add-jms.component.css']
})
export class AddJmsComponent implements OnInit {
  siteId;
  locationName;
  siteType;
  woNo;
  date;
  description;
  unit;
  qty;
  data;
  tempData;
  pId;
  updateHide: boolean = false;
  constructor(
    private toastr: ToastrService,
    public ActiveRouter: ActivatedRoute,
    public jmsservice: JmsService
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
    this.refreshData();
  }
  createJms(form: NgForm){
    console.log(form.value);
    const formData = form.value;
    formData._id = this.pId;
    if (this.updateHide == false) {
    console.log(form.value);
    this.jmsservice.postJms(formData).subscribe((res)=>{
      this.toastr.success("added Successfully", "Success!");
      form.resetForm();
      // this.refreshPatients();
    });
  }else{
    this.jmsservice.putJms(formData).subscribe((res) =>{
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
  refreshData() {
    this.jmsservice.getJms().subscribe((res) => {
      this.data = res;
      for (let index = 0; index < this.data.length; index++) {
        if (this.data[index]._id == this.pId) {
          this.siteId = this.data[index].siteId;
          this.locationName = this.data[index].locationName,
          this.siteType = this.data[index].siteType,
          this.woNo = this.data[index].woNo;
            this.date = this.data[index].date,
            this.description = this.data[index].description,
            this.unit = this.data[index].unit,
            this.qty = this.data[index].qty
        }
      }
    });
  }

}
