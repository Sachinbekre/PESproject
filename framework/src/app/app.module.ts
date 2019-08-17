import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';
import { WorkOrderComponent } from './views/work-order/work-order.component';
import { AddWorkOrderComponent } from './views/add-work-order/add-work-order.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImsComponent } from './views/ims/ims.component';
import { AddImsComponent } from './views/add-ims/add-ims.component';
import { JmsComponent } from './views/jms/jms.component';
import { AddJmsComponent } from './views/add-jms/add-jms.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { BillingComponent } from './views/billing/billing.component';
import { InvoiceBillComponent } from './views/invoice-bill/invoice-bill.component';
import {MatTableModule} from '@angular/material/table';
import { HeaderBarComponent } from './views/header-bar/header-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    WorkOrderComponent,
    AddWorkOrderComponent,
    ImsComponent,
    AddImsComponent,
    JmsComponent,
    AddJmsComponent,
    BillingComponent,
    InvoiceBillComponent,
    HeaderBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    MatCardModule,
    MatIconModule,
    MatButtonModule,
      MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
