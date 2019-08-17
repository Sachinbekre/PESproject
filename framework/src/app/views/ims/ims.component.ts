import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImsService } from './ims.service';

@Component({
  selector: 'app-ims',
  templateUrl: './ims.component.html',
  styleUrls: ['./ims.component.css']
})
export class ImsComponent implements OnInit {

  imsData;
  constructor(private router: Router, public imsService: ImsService) {
  }
  // viewPatient(pat) {
  //   this.router.navigate(['/patientDetails'], { queryParams: { id: pat._id } });
  // }
  edit(pat) {
    console.log(pat);
    // this.sendData.emit();
    this.router.navigate(['./addIms'], { queryParams: { id: pat._id } });
    //  this.patientService.patients = pat;
  }
  ngOnInit() {
    this.refreshPatients();
    console.log(this.imsData);
  }
  refreshPatients() {
    this.imsService.getIms().subscribe((res) => {
      this.imsData =res;
    });
  }
  delete(_id: string) {
    this.imsService.deleteIms(_id).subscribe((res) => {
      this.refreshPatients();
    });
  }

}
