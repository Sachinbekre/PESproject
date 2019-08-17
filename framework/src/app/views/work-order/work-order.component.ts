import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkOrderService } from './work-order.service';

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.css']
})
export class WorkOrderComponent implements OnInit {

  workOrderData;
  constructor(private router: Router, public workOrderService: WorkOrderService) {
  }
  // viewPatient(pat) {
  //   this.router.navigate(['/patientDetails'], { queryParams: { id: pat._id } });
  // }
  edit(pat) {
    console.log(pat);
    // this.sendData.emit();
    this.router.navigate(['./addWorkOrder'], { queryParams: { id: pat._id } });
    //  this.patientService.patients = pat;
  }
  ngOnInit() {
    this.refreshPatients();
  }
  refreshPatients() {
    this.workOrderService.getWorkOrder().subscribe((res) => {
      this.workOrderData =res;
    });
  }
  delete(_id: string) {
    this.workOrderService.deleteWorkOrder(_id).subscribe((res) => {
      this.refreshPatients();
    });
  }
}
