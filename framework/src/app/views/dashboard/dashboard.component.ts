import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
declare let $: any;
declare let layerSlider: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


    constructor(private spinner:Ng4LoadingSpinnerService){
    }
    ngOnInit() {
      // this.scroll();
      $(document).ready(function(){

        // Calling LayerSlider on the target element with custom slider options
        $('#sl').layerSlider({
          sliderVersion: '6.0.0',
          responsiveUnder: 0,
          layersContainer: 0,
          slideBGSize: 'auto',
          skin: 'v5',
          // thumbnailNavigation: 'always',
          skinsPath: '../../../assets/layerslider/skins/',


            // Please make sure to separate object
            // properties (i.e. your options) with a comma.
        });
    });
      this.spinner.show();
      setTimeout(()=>this.spinner.hide(),3000)
    }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
    // console.log(el.scrollIntoView);
  }

}
