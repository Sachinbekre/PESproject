import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { ImsService } from '../ims/ims.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-ims',
  templateUrl: './add-ims.component.html',
  styleUrls: ['./add-ims.component.css']
})
export class AddImsComponent implements OnInit {
  locationId;
  woNo;
  locationName;
  startDate;
  endDate;
  data;
  tempData;
  pId;
  updateHide: boolean = false;
  constructor(
    private toastr: ToastrService,
    public ActiveRouter: ActivatedRoute,
    public workOrderservice: ImsService
  ) {
  }
  ngOnInit() {
    this.ActiveRouter.queryParams
      .subscribe(params => {
        this.pId = params.id;
        console.log(params.id);
        if (this.pId) {
          this.updateHide = true;
        }
      });
    this.refreshPatients();
  }
  createIms(form: NgForm){
    console.log(form.value);
    const formData = form.value;
    formData._id = this.pId;
    if (this.updateHide == false) {
    console.log(form.value);
    this.workOrderservice.postIms(formData).subscribe((res)=>{
      this.toastr.success("added Successfully", "Success!");
      form.resetForm();
      // this.refreshPatients();
    });
  }else{
    this.workOrderservice.putIms(formData).subscribe((res) =>{
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
    this.workOrderservice.getIms().subscribe((res) => {
      this.data = res;
      for (let index = 0; index < this.data.length; index++) {
        if (this.data[index]._id == this.pId) {
          this.locationId = this.data[index].locationId;
          this.woNo = this.data[index].woNo;
          this.locationName = this.data[index].locationName,
            this.startDate = this.data[index].startDate,
            this.endDate = this.data[index].endDate
        }
      }
    });
  }

}
