import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JmsService } from './jms.service';

@Component({
  selector: 'app-jms',
  templateUrl: './jms.component.html',
  styleUrls: ['./jms.component.css']
})
export class JmsComponent implements OnInit {

  jmsData;
  constructor(private router: Router, public jmsService: JmsService) {
  }
  // viewPatient(pat) {
  //   this.router.navigate(['/patientDetails'], { queryParams: { id: pat._id } });
  // }
  edit(pat) {
    console.log(pat);
    // this.sendData.emit();
    this.router.navigate(['./addJms'], { queryParams: { id: pat._id } });
    //  this.patientService.patients = pat;
  }
  ngOnInit() {
    this.refreshData();
    console.log(this.jmsData);
  }
  refreshData() {
    this.jmsService.getJms().subscribe((res) => {
      this.jmsData =res;
    });
  }
  delete(_id: string) {
    this.jmsService.deleteJms(_id).subscribe((res) => {
      this.refreshData();
    });
  }
}
