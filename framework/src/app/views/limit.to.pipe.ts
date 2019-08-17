import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { InvoiceBillComponent } from './invoice-bill/invoice-bill.component';


@NgModule({
  declarations:[InvoiceBillComponent], // <---
  imports:[CommonModule],
  exports:[InvoiceBillComponent] // <---
})

export class MainPipe{}