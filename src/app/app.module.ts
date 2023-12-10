import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.development';
import {AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCustomerComponent } from './customers/new-customer/new-customer.component';
import { UpdateCustomerComponent } from './customers/update-customer/update-customer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdersComponent } from './orders/orders/orders.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    NewCustomerComponent,
    UpdateCustomerComponent,
    NavbarComponent,
    OrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
