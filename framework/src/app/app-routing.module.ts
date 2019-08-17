import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { WorkOrderComponent } from './views/work-order/work-order.component';
import { AddWorkOrderComponent } from './views/add-work-order/add-work-order.component';
import { ImsComponent } from './views/ims/ims.component';
import { AddImsComponent } from './views/add-ims/add-ims.component';
import { JmsComponent } from './views/jms/jms.component';
import { AddJmsComponent } from './views/add-jms/add-jms.component';
import { BillingComponent } from './views/billing/billing.component';
import { InvoiceBillComponent } from './views/invoice-bill/invoice-bill.component';
import { HeaderBarComponent } from './views/header-bar/header-bar.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:'headerBar',component:HeaderBarComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'workOrder',component:WorkOrderComponent
  },
  {
    path:'addWorkOrder',component:AddWorkOrderComponent
  },
  {
    path:'ims',component:ImsComponent
  },
  {
    path:'addIms',component:AddImsComponent
  },
  {
    path:'jms',component:JmsComponent
  },
  {
    path:'addJms',component:AddJmsComponent
  },
  {
    path:'billing',component:BillingComponent
  },
  {
    path:'invoiceBill',component:InvoiceBillComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
