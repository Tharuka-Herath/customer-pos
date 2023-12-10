import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { NewCustomerComponent } from './customers/new-customer/new-customer.component';
import { UpdateCustomerComponent } from './customers/update-customer/update-customer.component';
import { OrdersComponent } from './orders/orders/orders.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'new', component:NewCustomerComponent},
  {path:'update/:id', component:UpdateCustomerComponent},
  {path:'orders', component:OrdersComponent},
  {path:'order-details', component:OrderDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
